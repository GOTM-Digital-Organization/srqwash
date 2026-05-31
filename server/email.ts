import nodemailer from "nodemailer";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
};

const SERVICE_LABELS: Record<string, string> = {
  "roof-cleaning": "Roof Cleaning",
  "house-washing": "Exterior House Washing",
  "driveway-cleaning": "Driveway & Concrete Cleaning",
  "pool-cage-cleaning": "Pool Cage & Lanai Cleaning",
  "paver-sealing": "Paver Sealing",
  "multiple": "Multiple Services / Full Property",
  "commercial": "Commercial Property",
  "other": "Other",
};

function buildEmailHtml(data: ContactFormData): string {
  const serviceLabel = SERVICE_LABELS[data.service] || data.service || "Not specified";
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
      <p>Submitted via srqwash.com contact form</p>
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
    <div class="footer">
      This message was sent from the SRQ Wash website contact form. Reply directly to this email to respond to the customer.
    </div>
  </div>
</body>
</html>
  `.trim();
}

function buildEmailText(data: ContactFormData): string {
  const serviceLabel = SERVICE_LABELS[data.service] || data.service || "Not specified";
  return [
    "NEW QUOTE REQUEST — SRQ Wash",
    "================================",
    `Name:    ${data.name}`,
    `Phone:   ${data.phone}`,
    `Email:   ${data.email}`,
    `Address: ${data.address || "Not provided"}`,
    `Service: ${serviceLabel}`,
    data.message ? `\nDetails:\n${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends a contact form submission to the business email via Gmail SMTP.
 * Requires GMAIL_USER and GMAIL_APP_PASSWORD environment variables.
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    throw new Error("Gmail credentials not configured (GMAIL_USER / GMAIL_APP_PASSWORD).");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  await transporter.sendMail({
    from: `"SRQ Wash Website" <${gmailUser}>`,
    to: "srqwash@gmail.com",
    replyTo: data.email,
    subject: `New Quote Request from ${data.name}`,
    text: buildEmailText(data),
    html: buildEmailHtml(data),
  });
}
