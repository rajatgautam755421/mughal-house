import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass || smtpUser === "your-gmail@gmail.com") {
      console.log("[chat] SMTP not configured — message received:", { name, email, message });
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpUser, pass: smtpPass },
    });

    const sentAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    await transporter.sendMail({
      from: `"Mughal House Chat" <${smtpUser}>`,
      to: "gautamrajat185@gmail.com",
      replyTo: email || undefined,
      subject: `💬 New Chat Message — ${name}`,
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:520px;margin:0 auto;background:#f0f4ff;padding:24px 16px;">
          <div style="background:linear-gradient(135deg,#0b1d48,#1e4f9c);border-radius:14px 14px 0 0;padding:24px 28px;">
            <p style="margin:0;color:rgba(255,255,255,0.65);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Mughal House · Live Chat</p>
            <p style="margin:6px 0 0;color:#fff;font-size:18px;font-weight:700;">New message from ${name}</p>
          </div>
          <div style="height:3px;background:linear-gradient(90deg,transparent,#c9a843,transparent);"></div>
          <div style="background:#fff;padding:24px 28px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 14px 14px;">
            <div style="background:#f8faff;border-left:3px solid #1e4f9c;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:20px;">
              <p style="margin:0;color:#111827;font-size:15px;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <table style="width:100%;font-size:13px;color:#6b7280;">
              <tr><td style="padding:4px 0;width:80px;">From</td><td style="color:#111827;font-weight:600;">${name}</td></tr>
              ${email ? `<tr><td style="padding:4px 0;">Email</td><td><a href="mailto:${email}" style="color:#1e4f9c;">${email}</a></td></tr>` : ""}
              <tr><td style="padding:4px 0;">Sent</td><td>${sentAt} IST</td></tr>
            </table>
          </div>
        </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Chat email error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
