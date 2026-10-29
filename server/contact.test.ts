import { beforeEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

const emailMocks = vi.hoisted(() => ({
  sendQuoteEmails: vi.fn(),
}));

const notificationMocks = vi.hoisted(() => ({
  notifyOwner: vi.fn(),
}));

vi.mock("./email", () => ({
  sendQuoteEmails: emailMocks.sendQuoteEmails,
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: notificationMocks.notifyOwner,
}));

import { appRouter } from "./routers";

const validQuote = {
  name: "Jamie Smith",
  email: "jamie@example.com",
  phone: "941-555-0123",
  service: "roof-cleaning",
  address: "123 Main Street, Sarasota, FL",
  message: "Please send a quote for a tile roof.",
};

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    emailMocks.sendQuoteEmails.mockReset();
    emailMocks.sendQuoteEmails.mockResolvedValue(undefined);
    notificationMocks.notifyOwner.mockReset();
    notificationMocks.notifyOwner.mockResolvedValue(true);
  });

  it("sends the complete quote payload before reporting success", async () => {
    const caller = appRouter.createCaller(createPublicContext());

    await expect(caller.contact.submit(validQuote)).resolves.toEqual({ success: true });
    expect(emailMocks.sendQuoteEmails).toHaveBeenCalledWith(validQuote);
    expect(notificationMocks.notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Quote Request from Jamie Smith",
        content: expect.stringContaining("Email: jamie@example.com"),
      })
    );
  });

  it("requires a valid visitor email address before attempting delivery", async () => {
    const caller = appRouter.createCaller(createPublicContext());

    await expect(caller.contact.submit({ ...validQuote, email: "" })).rejects.toThrow(
      "A valid email address is required"
    );
    expect(emailMocks.sendQuoteEmails).not.toHaveBeenCalled();
  });

  it("does not report success when Gmail delivery fails", async () => {
    emailMocks.sendQuoteEmails.mockRejectedValueOnce(new Error("SMTP rejected the message"));
    const caller = appRouter.createCaller(createPublicContext());

    await expect(caller.contact.submit(validQuote)).rejects.toThrow("SMTP rejected the message");
    expect(notificationMocks.notifyOwner).not.toHaveBeenCalled();
  });
});
