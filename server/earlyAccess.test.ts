import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("earlyAccess.submit", () => {
  it("accepts valid early access request", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.earlyAccess.submit({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      company: "Test Corp",
      role: "Partner",
      message: "Looking forward to trying Eudox",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects request with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.earlyAccess.submit({
        firstName: "John",
        lastName: "Doe",
        email: "invalid-email",
        company: "Test Corp",
        role: "Partner",
      })
    ).rejects.toThrow();
  });

  it("rejects request with missing required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.earlyAccess.submit({
        firstName: "",
        lastName: "Doe",
        email: "john.doe@example.com",
        company: "Test Corp",
        role: "Partner",
      })
    ).rejects.toThrow();
  });

  it("accepts request without optional message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.earlyAccess.submit({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      company: "Another Corp",
      role: "Associate",
    });

    expect(result).toEqual({ success: true });
  });
});
