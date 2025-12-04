import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { createEarlyAccessRequest, getAllEarlyAccessRequests } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
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

  earlyAccess: router({
    submit: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1, "First name is required"),
          lastName: z.string().min(1, "Last name is required"),
          email: z.string().email("Invalid email address"),
          company: z.string().min(1, "Company name is required"),
          role: z.string().min(1, "Role is required"),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createEarlyAccessRequest({
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          company: input.company,
          role: input.role,
          message: input.message || null,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      // Only admins can view all requests
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await getAllEarlyAccessRequests();
    }),
  }),
});

export type AppRouter = typeof appRouter;
