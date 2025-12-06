import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthenticatedContext(userOverrides?: Partial<AuthenticatedUser>): TrpcContext {
  const defaultUser: AuthenticatedUser = {
    id: 1,
    openId: "test-user-123",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user: { ...defaultUser, ...userOverrides },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

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

describe("Authentication Flow", () => {
  describe("auth.me", () => {
    it("returns user data when authenticated", async () => {
      const ctx = createAuthenticatedContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.auth.me();

      expect(result).toBeDefined();
      expect(result?.email).toBe("test@example.com");
      expect(result?.name).toBe("Test User");
      expect(result?.role).toBe("user");
    });

    it("returns undefined when not authenticated", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.auth.me();

      expect(result).toBeUndefined();
    });
  });

  describe("User roles", () => {
    it("correctly identifies regular users", async () => {
      const ctx = createAuthenticatedContext({ role: "user" });
      const caller = appRouter.createCaller(ctx);

      const result = await caller.auth.me();

      expect(result?.role).toBe("user");
    });

    it("correctly identifies admin users", async () => {
      const ctx = createAuthenticatedContext({ role: "admin" });
      const caller = appRouter.createCaller(ctx);

      const result = await caller.auth.me();

      expect(result?.role).toBe("admin");
    });
  });

  describe("Protected routes", () => {
    it("allows authenticated users to access protected content", async () => {
      const ctx = createAuthenticatedContext();
      const caller = appRouter.createCaller(ctx);

      // Test that auth.me works (which is used by protected routes)
      const result = await caller.auth.me();
      expect(result).toBeDefined();
    });

    it("prevents unauthenticated users from accessing admin-only content", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      // Early access list is admin-only
      await expect(caller.earlyAccess.list()).rejects.toThrow();
    });

    it("allows admin users to access admin-only content", async () => {
      const ctx = createAuthenticatedContext({ role: "admin" });
      const caller = appRouter.createCaller(ctx);

      // Early access list is admin-only
      const result = await caller.earlyAccess.list();
      expect(Array.isArray(result)).toBe(true);
    });
  });
});
