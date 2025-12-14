import { describe, it, expect } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("Admin Security Tests", () => {
  it("should deny non-admin users from accessing early access list", async () => {
    const mockContext: Partial<TrpcContext> = {
      user: {
        id: 1,
        openId: "test-user",
        name: "Test User",
        email: "user@example.com",
        role: "user",
        loginMethod: "email",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
    } as TrpcContext;

    const caller = appRouter.createCaller(mockContext as TrpcContext);

    await expect(caller.earlyAccess.list()).rejects.toThrow();
  });

  it("should allow admin users to access early access list", async () => {
    const mockContext: Partial<TrpcContext> = {
      user: {
        id: 1,
        openId: "admin-user",
        name: "Admin User",
        email: "admin@example.com",
        role: "admin",
        loginMethod: "email",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      },
    } as TrpcContext;

    const caller = appRouter.createCaller(mockContext as TrpcContext);

    const result = await caller.earlyAccess.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should deny unauthenticated users from accessing early access list", async () => {
    const mockContext: Partial<TrpcContext> = {
      user: null,
    } as TrpcContext;

    const caller = appRouter.createCaller(mockContext as TrpcContext);

    await expect(caller.earlyAccess.list()).rejects.toThrow();
  });

  it("should allow anyone to submit early access requests", async () => {
    const mockContext: Partial<TrpcContext> = {
      user: null,
    } as TrpcContext;

    const caller = appRouter.createCaller(mockContext as TrpcContext);

    const result = await caller.earlyAccess.submit({
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      company: "Test Company",
      role: "Developer",
      message: "Test message",
    });

    expect(result.success).toBe(true);
  });
});
