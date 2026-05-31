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
            await transporter.sendMail({
              from: `"SRQ Wash Website" <${gmailUser}>`,
              to: "srqwash@gmail.com",
              replyTo: input.email || undefined,
              subject: `New Quote Request from ${input.name}`,
              text: lines,
            });
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
