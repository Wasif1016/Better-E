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

      // Admin notification email (only sent to company addresses, not to user)
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
        from: senderEmail,
        to: companyEmail,
        subject: 'Nieuwe Pre-order Aanmelding - BetterE',
        html: adminNotificationHtml,
        replyTo: email,
      });

      // Optionally send a second notification to a secondary company email
      if (companyEmailSecondary) {
        await transporter.sendMail({
          from: senderEmail,
          to: companyEmailSecondary,
          subject: 'Nieuwe Pre-order Aanmelding - BetterE (kopie)',
          html: adminNotificationHtml,
          replyTo: email,
        });
      }

      return NextResponse.json({ ok: true });
    }

    // Handle other email types (existing functionality, but always send only to company email)
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

    // Always send to company emails, never directly to the user
    const mailSubject = subject || 'New message from BetterE website';

    // Primary company email
    const infoPrimary = await transporter.sendMail({
      from: senderEmail,
      to: companyEmail,
      subject: mailSubject,
      html,
      replyTo: replyTo || senderEmail,
    });

    // Optional secondary company email
    if (companyEmailSecondary) {
      await transporter.sendMail({
        from: senderEmail,
        to: companyEmailSecondary,
        subject: `${mailSubject} (kopie)`,
        html,
        replyTo: replyTo || senderEmail,
      });
    }

    return NextResponse.json({ ok: true, messageId: infoPrimary.messageId });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: (error as Error).message || 'Failed to send email' }, { status: 500 });
  }
}


