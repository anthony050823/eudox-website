import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { createEarlyAccessRequest, getAllEarlyAccessRequests, createFeedbackSubmission, getAllFeedbackSubmissions } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure, adminProcedure } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";

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
        
        // Send notification to owner
        await notifyOwner({
          title: "New Early Access Request",
          content: `Name: ${input.firstName} ${input.lastName}\nEmail: ${input.email}\nCompany: ${input.company}\nRole: ${input.role}${input.message ? `\nMessage: ${input.message}` : ''}`
        });
        
        return { success: true };
      }),
    list: adminProcedure.query(async () => {
      return await getAllEarlyAccessRequests();
    }),
  }),

  feedback: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email address"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        await createFeedbackSubmission({
          name: input.name,
          email: input.email,
          message: input.message,
        });
        
        // Send notification to owner
        await notifyOwner({
          title: "New Feedback Submission",
          content: `Name: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`
        });
        
        return { success: true };
      }),
    list: adminProcedure.query(async () => {
      return await getAllFeedbackSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
