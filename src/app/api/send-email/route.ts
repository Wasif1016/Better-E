import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Handle preorder email type
    if (body.type === 'preorder') {
      const { email } = body as { email: string };

      if (!email) {
        return NextResponse.json({ error: 'Missing email' }, { status: 400 });
      }

      const smtpUser = process.env.SMTP_USER as string;
      const smtpPass = process.env.SMTP_PASS as string;
      const senderEmail = process.env.SENDER_EMAIL as string;
      const companyEmail = process.env.COMPANY_EMAIL as string;
      const companyEmailSecondary = process.env.COMPANY_EMAIL_SECONDARY as string | undefined;

      if (!smtpUser || !smtpPass || !senderEmail || !companyEmail) {
        return NextResponse.json({ error: 'Server email configuration missing' }, { status: 500 });
      }

      const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.verify();

      // Admin notification email (sent to company addresses)
      const adminNotificationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nieuwe Pre-order Aanmelding</h2>
          <p>Er is een nieuwe aanmelding voor de BetterE pre-order ontvangen:</p>
          <p><strong>E-mailadres:</strong> ${email}</p>
          <p><strong>Datum:</strong> ${new Date().toLocaleString('nl-NL')}</p>
        </div>
      `;

      // Send notification to primary company email
      await transporter.sendMail({
        from: `BetterE <${senderEmail}>`,
        to: companyEmail,
        subject: 'Nieuwe Pre-order Aanmelding - BetterE',
        html: adminNotificationHtml,
        replyTo: email,
      });

      // Optionally send a second notification to a secondary company email
      if (companyEmailSecondary) {
        await transporter.sendMail({
          from: `BetterE <${senderEmail}>`,
          to: companyEmailSecondary,
          subject: 'Nieuwe Pre-order Aanmelding - BetterE (kopie)',
          html: adminNotificationHtml,
          replyTo: email,
        });
      }

      // Thank-you email to the user
      const userThankYouHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827;">
          <h2 style="font-size: 20px; margin-bottom: 12px;">Bedankt voor je interesse in BetterE</h2>
          <p style="margin-bottom: 12px;">
            Bedankt voor je pre-order aanmelding met het e-mailadres <strong>${email}</strong>.
          </p>
          <p style="margin-bottom: 12px;">
            We houden je op de hoogte van de laatste ontwikkelingen rondom BetterE en laten het je weten zodra er nieuws is over beschikbaarheid, prijzen en lancering.
          </p>
          <p style="margin-bottom: 12px;">
            Als je in de tussentijd vragen hebt, kun je altijd reageren op deze e-mail.
          </p>
          <p style="margin-top: 24px;">
            Met vriendelijke groet,<br/>
            <strong>Het BetterE team</strong>
          </p>
        </div>
      `;

      await transporter.sendMail({
        from: `BetterE <${senderEmail}>`,
        to: email,
        subject: 'Bedankt voor je pre-order aanmelding - BetterE',
        html: userThankYouHtml,
      });

      return NextResponse.json({ ok: true });
    }

    // Handle other email types (partnership/contact etc.)
    const { subject, html, replyTo } = body as { subject?: string; html?: string; replyTo?: string };

    if (!html) {
      return NextResponse.json({ error: 'Missing email html' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER as string;
    const smtpPass = process.env.SMTP_PASS as string;
    const senderEmail = process.env.SENDER_EMAIL as string;
    const companyEmail = process.env.COMPANY_EMAIL as string;
    const companyEmailSecondary = process.env.COMPANY_EMAIL_SECONDARY as string | undefined;

    if (!smtpUser || !smtpPass || !senderEmail || !companyEmail) {
      return NextResponse.json({ error: 'Server email configuration missing' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // Verify connection configuration for clearer errors
    await transporter.verify();

    // Always send to company emails; optionally also a confirmation to the user
    const mailSubject = subject || 'New message from BetterE website';

    // Primary company email
    const infoPrimary = await transporter.sendMail({
      from: `BetterE <${senderEmail}>`,
      to: companyEmail,
      subject: mailSubject,
      html,
      replyTo: replyTo || senderEmail,
    });

    // Optional secondary company email
    if (companyEmailSecondary) {
      await transporter.sendMail({
        from: `BetterE <${senderEmail}>`,
        to: companyEmailSecondary,
        subject: `${mailSubject} (kopie)`,
        html,
        replyTo: replyTo || senderEmail,
      });
    }

    // Optional thank-you email to the user, if we have their email in replyTo
    if (replyTo) {
      const userHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827;">
          <h2 style="font-size: 20px; margin-bottom: 12px;">We hebben je bericht ontvangen</h2>
          <p style="margin-bottom: 12px;">
            Bedankt voor je bericht aan BetterE. We hebben je aanvraag goed ontvangen en nemen zo snel mogelijk contact met je op.
          </p>
          <p style="margin-bottom: 12px;">
            Ons team bekijkt je bericht zorgvuldig en probeert doorgaans binnen enkele werkdagen te reageren.
          </p>
          <p style="margin-bottom: 12px;">
            Als je aanvullende informatie wilt sturen, kun je eenvoudig reageren op deze e-mail.
          </p>
          <p style="margin-top: 24px;">
            Met vriendelijke groet,<br/>
            <strong>Het BetterE team</strong>
          </p>
        </div>
      `;

      await transporter.sendMail({
        from: `BetterE <${senderEmail}>`,
        to: replyTo,
        subject: 'Bedankt voor je bericht - BetterE',
        html: userHtml,
      });
    }

    return NextResponse.json({ ok: true, messageId: infoPrimary.messageId });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: (error as Error).message || 'Failed to send email' }, { status: 500 });
  }
}


