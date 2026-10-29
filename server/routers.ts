import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { sendQuoteEmails } from "./email";

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
          email: z.string().trim().email("A valid email address is required"),
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

        // Delivery to SRQ Wash and the visitor is authoritative. If Gmail rejects
        // either message, this mutation rejects and the website must not record a lead.
        await sendQuoteEmails(input);

        // Manus owner notification is a secondary alert only. It must not change
        // the customer-facing result after successful Gmail delivery.
        void notifyOwner({
          title: `New Quote Request from ${input.name}`,
          content: lines,
        }).catch(error => console.warn("[contact] Secondary owner notification failed:", error));

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
