import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LOGO_B64 =
  "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+CiAgPGRlZnM+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Imdsb2JlIiBjeD0iMzUlIiBjeT0iMzAlIiByPSI3NSUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNWFhNmZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjMWU0ZjljIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBhMWU0YSIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibUdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNhNjRiOCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMzI0NWUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im1TaGluZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMzUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xNSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxjbGlwUGF0aCBpZD0iZ2xvYmVDbGlwIj4KICAgICAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSIyMzAiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjIzMCIgZmlsbD0idXJsKCNnbG9iZSkiLz4KICA8ZyBjbGlwLXBhdGg9InVybCgjZ2xvYmVDbGlwKSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xOCI+CiAgICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSIxNjAiIHI9IjMiLz48Y2lyY2xlIGN4PSIxMzIiIGN5PSIxNzIiIHI9IjIuNSIvPjxjaXJjbGUgY3g9IjI3MCIgY3k9IjE3MCIgcj0iMi41Ii8+CiAgPC9nPgogIDxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzllYzRmZiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjg1Ij4KICAgIDxlbGxpcHNlIGN4PSIyNTYiIGN5PSIyNTYiIHJ4PSIyNDAiIHJ5PSI5MCIgdHJhbnNmb3JtPSJyb3RhdGUoLTIwIDI1NiAyNTYpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMjU2IiBjeT0iMjU2IiByeD0iMjQwIiByeT0iOTAiIHRyYW5zZm9ybT0icm90YXRlKDI1IDI1NiAyNTYpIi8+CiAgPC9nPgogIDxnIGZpbGw9IiNmZmZmZmYiPgogICAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMTUwIiByPSIxNCIvPgogICAgPHBhdGggZD0iTTIzMiAyMDAgcTI0IC0zMCA0OCAwIHYxOCBoLTQ4IHoiLz4KICA8L2c+CiAgPGc+CiAgICA8cGF0aCBkPSJNMTY4IDIzMCBMMTY4IDQxMCBMMjEwIDQxMCBMMjEwIDMwMCBMMjU2IDM2MCBMMzAyIDMwMCBMMzAyIDQxMCBMMzQ0IDQxMCBMMzQ0IDIzMCBMMzAyIDIzMCBMMjU2IDMwMCBMMjEwIDIzMCBaIgogICAgICAgICAgZmlsbD0idXJsKCNtR3JhZCkiIHN0cm9rZT0iIzBhMTc0MCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPC9nPgo8L3N2Zz4K";

function buildEmailHtml({
  name, email, phone, date, time, message,
}: {
  name: string; email: string; phone: string;
  date?: string; time?: string; message?: string;
}) {
  const logoSrc = `data:image/svg+xml;base64,${LOGO_B64}`;
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  });

  const row = (label: string, value: string, isLink?: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #f0f4ff;vertical-align:top;width:130px;">
        <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">${label}</span>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #f0f4ff;vertical-align:top;">
        ${isLink
          ? `<a href="${isLink}" style="color:#1e4f9c;font-size:14px;font-weight:500;text-decoration:none;">${value}</a>`
          : `<span style="color:#111827;font-size:14px;font-weight:500;">${value}</span>`}
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Appointment Request</title></head>
<body style="margin:0;padding:0;background:#f0f4ff;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4ff;padding:32px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

      <!-- Header -->
      <tr><td>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0b1d48 0%,#1e4f9c 60%,#2563c4 100%);border-radius:16px 16px 0 0;overflow:hidden;">
          <tr>
            <td style="padding:32px 36px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:16px;vertical-align:middle;">
                    <img src="${logoSrc}" width="56" height="56" alt="Mughal House Logo" style="display:block;border-radius:50%;" />
                  </td>
                  <td style="vertical-align:middle;">
                    <p style="margin:0;color:rgba(255,255,255,0.65);font-size:10px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;">Mughal House Manpower Consultancy</p>
                    <p style="margin:4px 0 0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.01em;">New Appointment Request</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Gold accent bar -->
          <tr><td style="height:4px;background:linear-gradient(90deg,transparent,#c9a843,#e8c054,#c9a843,transparent);"></td></tr>
        </table>
      </td></tr>

      <!-- Alert banner -->
      <tr><td style="background:#1e4f9c;padding:14px 36px;">
        <table cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td>
              <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#c9a843;margin-right:8px;vertical-align:middle;"></span>
              <span style="color:#d0e4ff;font-size:13px;vertical-align:middle;">A new appointment has been requested via the website.</span>
            </td>
            <td align="right">
              <span style="background:rgba(201,168,67,0.20);border:1px solid rgba(201,168,67,0.40);color:#e8c054;font-size:11px;font-weight:600;padding:4px 10px;border-radius:20px;white-space:nowrap;">Action Required</span>
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Body -->
      <tr><td style="background:#ffffff;padding:32px 36px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">

        <!-- Section: Contact Info -->
        <p style="margin:0 0 4px;color:#1e4f9c;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">Contact Information</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          ${row("Full Name", name)}
          ${row("Email", email, `mailto:${email}`)}
          ${row("Phone", phone, `tel:${phone}`)}
        </table>

        ${(date || time) ? `
        <!-- Section: Appointment -->
        <p style="margin:0 0 4px;color:#1e4f9c;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">Preferred Slot</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          ${date ? row("Date", date) : ""}
          ${time ? row("Time", time) : ""}
        </table>` : ""}

        ${message ? `
        <!-- Section: Message -->
        <p style="margin:0 0 8px;color:#1e4f9c;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">Message / Purpose</p>
        <div style="background:#f8faff;border:1px solid #dce8ff;border-left:3px solid #1e4f9c;border-radius:0 8px 8px 0;padding:16px 18px;margin-bottom:28px;">
          <p style="margin:0;color:#374151;font-size:14px;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
        </div>` : ""}

        <!-- Reply prompt -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#f0f7ff,#e8f0ff);border:1px solid #c7d9f7;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:18px 20px;">
              <p style="margin:0 0 6px;color:#1e4f9c;font-size:13px;font-weight:600;">💬 Reply directly to this email</p>
              <p style="margin:0;color:#4b6cb7;font-size:13px;line-height:1.5;">
                Hit <strong>Reply</strong> and your response goes straight to <strong>${name}</strong> at <a href="mailto:${email}" style="color:#1e4f9c;">${email}</a>.
              </p>
            </td>
          </tr>
        </table>

      </td></tr>

      <!-- Footer -->
      <tr><td style="background:#0d1624;border-radius:0 0 16px 16px;padding:24px 36px;border-left:1px solid #1a2a4a;border-right:1px solid #1a2a4a;border-bottom:1px solid #1a2a4a;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <p style="margin:0;color:#ffffff;font-size:13px;font-weight:600;">Mughal House Manpower Consultancy</p>
              <p style="margin:4px 0 0;color:#5a7ab0;font-size:11px;">Ahmed Plaza, Pandua, Hooghly, West Bengal, India · License RAS838225</p>
            </td>
            <td align="right" style="white-space:nowrap;">
              <p style="margin:0;color:#3a5a8a;font-size:11px;">Received ${submittedAt} IST</p>
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Bottom padding -->
      <tr><td style="height:24px;"></td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, date, time, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass || smtpUser === "your-gmail@gmail.com") {
      console.log("[appointment] SMTP not configured — booking received:", { name, email, phone, date, time, message });
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Mughal House Website" <${smtpUser}>`,
      to: "gautamrajat185@gmail.com",
      replyTo: email,
      subject: `📅 New Appointment — ${name}`,
      html: buildEmailHtml({ name, email, phone, date, time, message }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Appointment email error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
