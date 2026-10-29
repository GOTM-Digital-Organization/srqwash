import nodemailer from "nodemailer";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
};

const QUOTE_NOTIFICATION_TO = "srqwash@gmail.com";
const PUBLIC_PHONE_DISPLAY = "(941) 400-4496";
const PUBLIC_PHONE_DIAL = "+19414004496";

const SERVICE_LABELS: Record<string, string> = {
  "roof-cleaning": "Roof Cleaning",
  "house-washing": "Exterior House Washing",
  "driveway-cleaning": "Driveway & Concrete Cleaning",
  "pool-cage-cleaning": "Pool Cage & Lanai Cleaning",
  "paver-sealing": "Paver Sealing",
  multiple: "Multiple Services / Full Property",
  commercial: "Commercial Property",
  other: "Other",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function serviceLabelFor(data: ContactFormData): string {
  return SERVICE_LABELS[data.service] || data.service || "Not specified";
}

function getTransporter() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    throw new Error("Gmail credentials are not configured for quote delivery.");
  }

  return {
    gmailUser,
    transporter: nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    }),
  };
}

function buildOwnerEmailHtml(data: ContactFormData): string {
  const serviceLabel = serviceLabelFor(data);
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f1f5f9; margin: 0; padding: 20px; }
    .card { background: #ffffff; border-radius: 10px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { background: #111827; padding: 28px 32px; }
    .header h1 { color: #F97316; font-size: 26px; margin: 0 0 4px; }
    .header p { color: #9ca3af; font-size: 14px; margin: 0; }
    .body { padding: 28px 32px; }
    .row { margin-bottom: 18px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 4px; }
    .value { font-size: 15px; color: #111827; }
    .message-box { background: #f8fafc; border-left: 3px solid #0EA5E9; border-radius: 4px; padding: 14px 16px; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap; }
    .footer { background: #f8fafc; border-top: 1px solid #e5e7eb; padding: 16px 32px; font-size: 12px; color: #9ca3af; }
    a { color: #0EA5E9; text-decoration: none; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Quote Request</h1>
      <p>Submitted via srqwash.com</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(data.name)}</div>
      </div>
      <div class="row">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
      </div>
      <div class="row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
      </div>
      <div class="row">
        <div class="label">Property Address</div>
        <div class="value">${data.address ? escapeHtml(data.address) : "<em style='color:#9ca3af'>Not provided</em>"}</div>
      </div>
      <div class="row">
        <div class="label">Service Requested</div>
        <div class="value">${escapeHtml(serviceLabel)}</div>
      </div>
      ${data.message ? `
      <div class="row">
        <div class="label">Additional Details</div>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>` : ""}
    </div>
    <div class="footer">This message was sent from the SRQ Wash website quote form. Reply directly to this email to respond to the customer.</div>
  </div>
</body>
</html>
  `.trim();
}

function buildOwnerEmailText(data: ContactFormData): string {
  return [
    "NEW QUOTE REQUEST — SRQ Wash",
    "================================",
    `Name:    ${data.name}`,
    `Phone:   ${data.phone}`,
    `Email:   ${data.email}`,
    `Address: ${data.address || "Not provided"}`,
    `Service: ${serviceLabelFor(data)}`,
    data.message ? `\nDetails:\n${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildCustomerConfirmationHtml(data: ContactFormData): string {
  const firstName = escapeHtml(data.name.split(/\s+/)[0] || "there");
  const serviceLabel = escapeHtml(serviceLabelFor(data));
  const address = data.address ? `<p style="color: #f8fafc; margin: 6px 0;"><strong>Property:</strong> ${escapeHtml(data.address)}</p>` : "";

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; padding: 32px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 24px;">
        <h1 style="color: #f97316; font-size: 28px; margin: 0;">SRQ WASH</h1>
        <p style="color: #94a3b8; margin: 4px 0 0;">Professional Exterior Cleaning</p>
      </div>
      <h2 style="color: #f8fafc; font-size: 22px; margin-bottom: 8px;">Thanks, ${firstName}! We received your quote request.</h2>
      <p style="color: #cbd5e1; line-height: 1.6;">We will review your request and get back to you shortly, usually within a few hours during business hours.</p>
      <div style="background: #1e293b; border-radius: 8px; padding: 20px; margin: 24px 0;">
        <p style="color: #94a3b8; font-size: 14px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Your Request Summary</p>
        ${address}
        <p style="color: #f8fafc; margin: 6px 0;"><strong>Service:</strong> ${serviceLabel}</p>
        <p style="color: #f8fafc; margin: 6px 0;"><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      </div>
      <p style="color: #cbd5e1; line-height: 1.6;">Need a faster response? Call us directly:</p>
      <a href="tel:${PUBLIC_PHONE_DIAL}" style="display: inline-block; background: #f97316; color: white; font-weight: bold; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 16px; margin-bottom: 24px;">${PUBLIC_PHONE_DISPLAY}</a>
      <hr style="border: none; border-top: 1px solid #334155; margin: 24px 0;" />
      <p style="color: #64748b; font-size: 13px; text-align: center;">SRQ Wash · Lakewood Ranch, FL · Licensed &amp; Insured<br/>5.0 Stars · 48 Google Reviews</p>
    </div>
  `.trim();
}

function buildCustomerConfirmationText(data: ContactFormData): string {
  return [
    `Thanks, ${data.name.split(/\s+/)[0] || "there"}!`,
    "",
    "SRQ Wash received your quote request and will get back to you shortly.",
    `Service: ${serviceLabelFor(data)}`,
    `Phone: ${data.phone}`,
    data.address ? `Property: ${data.address}` : "",
    "",
    `Need a faster response? Call ${PUBLIC_PHONE_DISPLAY}.`,
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Verifies the server-only Gmail SMTP credentials without sending a message.
 */
export async function verifyQuoteEmailTransport(): Promise<true> {
  const { transporter } = getTransporter();
  await transporter.verify();
  return true;
}

/**
 * Delivers the lead to SRQ Wash and sends the visitor a confirmation email.
 * The caller must treat rejection as a failed quote submission so an Ads lead
 * conversion is never recorded for a form that Gmail did not accept.
 */
export async function sendQuoteEmails(data: ContactFormData): Promise<void> {
  const { gmailUser, transporter } = getTransporter();

  await transporter.sendMail({
    from: `"SRQ Wash Website" <${gmailUser}>`,
    to: QUOTE_NOTIFICATION_TO,
    replyTo: data.email,
    subject: `New Quote Request from ${data.name}`,
    text: buildOwnerEmailText(data),
    html: buildOwnerEmailHtml(data),
  });

  await transporter.sendMail({
    from: `"SRQ Wash" <${gmailUser}>`,
    to: data.email,
    subject: "We received your quote request — SRQ Wash",
    text: buildCustomerConfirmationText(data),
    html: buildCustomerConfirmationHtml(data),
  });
}
