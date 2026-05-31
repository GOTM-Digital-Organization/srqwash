import { describe, it, expect } from "vitest";
import nodemailer from "nodemailer";

describe("Gmail SMTP credentials", () => {
  it("should have GMAIL_USER and GMAIL_APP_PASSWORD set", () => {
    expect(process.env.GMAIL_USER).toBeTruthy();
    expect(process.env.GMAIL_APP_PASSWORD).toBeTruthy();
  });

  it("should be able to create a nodemailer transporter with Gmail credentials", async () => {
    const gmailUser = process.env.GMAIL_USER!;
    const gmailPass = process.env.GMAIL_APP_PASSWORD!;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Verify the transporter configuration is valid (connects to Gmail SMTP)
    await expect(transporter.verify()).resolves.toBe(true);
  }, 15000); // 15s timeout for network call
});
