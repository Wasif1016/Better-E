import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subject, html, to, replyTo } = body as { subject?: string; html?: string; to?: string; replyTo?: string };

    if (!html) {
      return NextResponse.json({ error: 'Missing email html' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER as string;
    const smtpPass = process.env.SMTP_PASS as string;
    const senderEmail = process.env.SENDER_EMAIL as string;
    const companyEmail = process.env.COMPANY_EMAIL as string;

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

    const toAddress = to || companyEmail;
    const mailSubject = subject || 'New message from BetterE website';

    const info = await transporter.sendMail({
      from: senderEmail,
      to: toAddress,
      subject: mailSubject,
      html,
      replyTo: replyTo || senderEmail,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: (error as Error).message || 'Failed to send email' }, { status: 500 });
  }
}


