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

  // ── Editorial palette, mirrored from src/app/globals.css ───────────────
  const PAPER       = "#faf8f3";   // page background
  const PAPER_SOFT  = "#f3efe6";
  const RULE        = "#e6e1d6";
  const INK         = "#111827";
  const INK_SOFT    = "#3b475c";
  const INK_MUTED   = "#6b7689";
  const PRIMARY     = "#1e4f9c";   // royal — main logo color
  const PRIMARY_DK  = "#13245e";
  const NAVY_DEEP   = "#0a1e4a";
  const GOLD        = "#b08830";
  const GOLD_SOFT   = "#dcc079";

  const row = (label: string, value: string, isLink?: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${RULE};vertical-align:top;width:140px;">
        <span style="font-family:'Inter','Segoe UI',Arial,sans-serif;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.18em;color:${INK_MUTED};">${label}</span>
      </td>
      <td style="padding:14px 0;border-bottom:1px solid ${RULE};vertical-align:top;">
        ${isLink
          ? `<a href="${isLink}" style="color:${PRIMARY};font-family:'Inter','Segoe UI',Arial,sans-serif;font-size:14.5px;font-weight:500;text-decoration:none;border-bottom:1px solid ${PRIMARY};padding-bottom:1px;">${value}</a>`
          : `<span style="color:${INK};font-family:'Inter','Segoe UI',Arial,sans-serif;font-size:14.5px;font-weight:500;">${value}</span>`}
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>New Appointment Request — Mughal House</title>
</head>
<body style="margin:0;padding:0;background:${PAPER_SOFT};font-family:'Inter','Segoe UI',Arial,sans-serif;color:${INK};">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${PAPER_SOFT};padding:36px 16px;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px;background:${PAPER};border:1px solid ${RULE};">

      <!-- Brand ribbon: royal → gold gradient, mirrors the site nav -->
      <tr><td style="height:3px;background:linear-gradient(90deg,${PRIMARY_DK} 0%,${PRIMARY} 45%,${GOLD} 100%);font-size:0;line-height:0;">&nbsp;</td></tr>

      <!-- Masthead -->
      <tr><td style="padding:30px 36px 22px 36px;border-bottom:1px solid ${RULE};">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td style="vertical-align:middle;">
              <table cellpadding="0" cellspacing="0" role="presentation"><tr>
                <td style="padding-right:16px;vertical-align:middle;">
                  <img src="${logoSrc}" width="48" height="48" alt="Mughal House" style="display:block;" />
                </td>
                <td style="vertical-align:middle;">
                  <p style="margin:0;color:${INK_MUTED};font-size:10.5px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;">
                    <span style="display:inline-block;width:16px;height:1px;background:${GOLD};vertical-align:middle;margin-right:8px;"></span>
                    Mughal House Manpower Consultancy
                  </p>
                  <p style="margin:8px 0 0;color:${INK};font-family:'Georgia','Times New Roman',serif;font-size:24px;font-weight:600;letter-spacing:-0.01em;line-height:1.15;">
                    New appointment request<span style="color:${GOLD};">.</span>
                  </p>
                </td>
              </tr></table>
            </td>
            <td align="right" style="vertical-align:top;white-space:nowrap;">
              <span style="display:inline-block;background:${PRIMARY};color:${PAPER};font-size:10.5px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;padding:5px 11px;">
                Action Required
              </span>
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Sub-line -->
      <tr><td style="padding:18px 36px 10px 36px;">
        <p style="margin:0;color:${INK_SOFT};font-size:14px;line-height:1.65;">
          A booking has just come in via <a href="https://mhrecruiter.com" style="color:${PRIMARY};text-decoration:none;border-bottom:1px solid ${PRIMARY};">mhrecruiter.com</a>.
          Please confirm the slot with the candidate within one working day.
        </p>
      </td></tr>

      <!-- Contact information -->
      <tr><td style="padding:18px 36px 6px 36px;">
        <p style="margin:0 0 8px 0;color:${INK_MUTED};font-size:10.5px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;">
          <span style="display:inline-block;width:16px;height:1px;background:${GOLD};vertical-align:middle;margin-right:8px;"></span>
          Contact information
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          ${row("Full name", name)}
          ${row("Email",     email, `mailto:${email}`)}
          ${row("Phone",     phone, `tel:${phone}`)}
        </table>
      </td></tr>

      ${(date || time) ? `
      <!-- Preferred slot -->
      <tr><td style="padding:22px 36px 6px 36px;">
        <p style="margin:0 0 8px 0;color:${INK_MUTED};font-size:10.5px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;">
          <span style="display:inline-block;width:16px;height:1px;background:${GOLD};vertical-align:middle;margin-right:8px;"></span>
          Preferred slot
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          ${date ? row("Date", date) : ""}
          ${time ? row("Time", time) : ""}
        </table>
      </td></tr>` : ""}

      ${message ? `
      <!-- Message / purpose -->
      <tr><td style="padding:22px 36px 0 36px;">
        <p style="margin:0 0 10px 0;color:${INK_MUTED};font-size:10.5px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;">
          <span style="display:inline-block;width:16px;height:1px;background:${GOLD};vertical-align:middle;margin-right:8px;"></span>
          Message / purpose
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr><td style="border-left:2px solid ${GOLD_SOFT};padding:4px 0 4px 16px;">
            <p style="margin:0;color:${INK_SOFT};font-size:14.5px;line-height:1.7;font-style:italic;">
              &ldquo;${message.replace(/\n/g, "<br>")}&rdquo;
            </p>
          </td></tr>
        </table>
      </td></tr>` : ""}

      <!-- Reply prompt -->
      <tr><td style="padding:28px 36px 28px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${PAPER_SOFT};border:1px solid ${RULE};">
          <tr><td style="padding:18px 22px;">
            <p style="margin:0 0 4px 0;color:${PRIMARY_DK};font-family:'Georgia','Times New Roman',serif;font-size:16px;font-weight:600;letter-spacing:-0.005em;">
              Reply directly to this email
            </p>
            <p style="margin:0;color:${INK_SOFT};font-size:13.5px;line-height:1.6;">
              Hit <strong style="color:${INK};">Reply</strong> &mdash; your response goes straight to
              <strong style="color:${INK};">${name}</strong> at
              <a href="mailto:${email}" style="color:${PRIMARY};text-decoration:none;border-bottom:1px solid ${PRIMARY};">${email}</a>.
            </p>
          </td></tr>
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="background:linear-gradient(180deg,${NAVY_DEEP} 0%,${PRIMARY_DK} 100%);padding:22px 36px;color:${PAPER};">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td style="vertical-align:top;">
              <p style="margin:0;font-family:'Georgia','Times New Roman',serif;color:${PAPER};font-size:14px;font-weight:600;letter-spacing:-0.005em;">
                Mughal House Manpower Consultancy
              </p>
              <p style="margin:4px 0 0;color:rgba(250,248,243,0.62);font-size:11px;line-height:1.5;">
                Ahmed Plaza, Pandua, Hooghly, West Bengal, India &middot;
                License <span style="color:${GOLD_SOFT};">RAS838225</span>
              </p>
            </td>
            <td align="right" style="vertical-align:top;white-space:nowrap;">
              <p style="margin:0;color:rgba(250,248,243,0.45);font-size:10.5px;letter-spacing:0.04em;">
                Received ${submittedAt} IST
              </p>
            </td>
          </tr>
        </table>
      </td></tr>

    </table>
    <!-- Trailing brand line -->
    <p style="margin:14px 0 0;color:${INK_MUTED};font-size:10.5px;letter-spacing:0.22em;text-transform:uppercase;">
      mhrecruiter.com
    </p>
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
