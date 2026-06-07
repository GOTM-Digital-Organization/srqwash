import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().optional().default(""),
          phone: z.string().min(1, "Phone is required"),
          service: z.string().optional().default(""),
          address: z.string().optional().default(""),
          message: z.string().optional().default(""),
        })
      )
      .mutation(async ({ input }) => {
        const lines = [
          `Name: ${input.name}`,
          `Phone: ${input.phone}`,
          input.email ? `Email: ${input.email}` : null,
          input.address ? `Address: ${input.address}` : null,
          input.service ? `Service: ${input.service}` : null,
          input.message ? `Message: ${input.message}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        const notified = await notifyOwner({
          title: `New Quote Request from ${input.name}`,
          content: lines,
        });

        // Also try to send via Gmail SMTP as a secondary channel
        try {
          const gmailUser = process.env.GMAIL_USER;
          const gmailPass = process.env.GMAIL_APP_PASSWORD;
          if (gmailUser && gmailPass) {
            const nodemailer = await import("nodemailer");
            const transporter = nodemailer.default.createTransport({
              service: "gmail",
              auth: { user: gmailUser, pass: gmailPass },
            });

            // Notify owner
            await transporter.sendMail({
              from: `"SRQ Wash Website" <${gmailUser}>`,
              to: "srqwash@gmail.com",
              replyTo: input.email || undefined,
              subject: `New Quote Request from ${input.name}`,
              text: lines,
            });

            // Send auto-reply to customer if they provided an email
            if (input.email) {
              await transporter.sendMail({
                from: `"SRQ Wash" <${gmailUser}>`,
                to: input.email,
                subject: "We received your quote request — SRQ Wash",
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; padding: 32px; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                      <h1 style="color: #f97316; font-size: 28px; margin: 0;">SRQ WASH</h1>
                      <p style="color: #94a3b8; margin: 4px 0 0;">Professional Pressure Washing</p>
                    </div>
                    <h2 style="color: #f8fafc; font-size: 22px; margin-bottom: 8px;">Thanks, ${input.name}! We got your request.</h2>
                    <p style="color: #cbd5e1; line-height: 1.6;">We've received your quote request and will be in touch shortly — usually within a few hours during business hours.</p>
                    <div style="background: #1e293b; border-radius: 8px; padding: 20px; margin: 24px 0;">
                      <p style="color: #94a3b8; font-size: 14px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Your Request Summary</p>
                      ${input.address ? `<p style="color: #f8fafc; margin: 6px 0;"><strong>Property:</strong> ${input.address}</p>` : ""}
                      ${input.service ? `<p style="color: #f8fafc; margin: 6px 0;"><strong>Service:</strong> ${input.service}</p>` : ""}
                      ${input.phone ? `<p style="color: #f8fafc; margin: 6px 0;"><strong>Phone:</strong> ${input.phone}</p>` : ""}
                    </div>
                    <p style="color: #cbd5e1; line-height: 1.6;">Need a faster response? Give us a call directly:</p>
                    <a href="tel:+19412292355" style="display: inline-block; background: #f97316; color: white; font-weight: bold; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 16px; margin-bottom: 24px;">(941) 229-2355</a>
                    <hr style="border: none; border-top: 1px solid #334155; margin: 24px 0;" />
                    <p style="color: #64748b; font-size: 13px; text-align: center;">SRQ Wash · Lakewood Ranch, FL · Licensed &amp; Insured<br/>5.0 Stars · 48 Google Reviews</p>
                  </div>
                `,
              });
            }
          }
        } catch (err) {
          // Gmail send failed — that's OK, the Manus notification above already went through
          console.warn("[contact] Gmail send failed:", err);
        }

        if (!notified) {
          // Both channels failed — surface an error to the user
          throw new Error("Failed to send notification");
        }

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
