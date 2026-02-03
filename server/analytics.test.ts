import { describe, it, expect } from "vitest";
import { appRouter } from "./routers";

describe("Video Analytics", () => {
  it("should accept valid video tracking data", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.analytics.trackVideo({
      sessionId: "test_session_123",
      eventType: "play",
      videoUrl: "https://example.com/video.mp4",
      currentTime: 0,
      duration: 120,
      userAgent: "Mozilla/5.0 Test Browser",
    });

    expect(result.success).toBe(true);
  });

  it("should track progress milestones", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const sessionId = `test_session_${Date.now()}`;
    
    // Track 25% progress
    const result25 = await caller.analytics.trackVideo({
      sessionId,
      eventType: "progress_25",
      videoUrl: "https://example.com/video.mp4",
      currentTime: 30,
      duration: 120,
    });

    expect(result25.success).toBe(true);

    // Track 50% progress
    const result50 = await caller.analytics.trackVideo({
      sessionId,
      eventType: "progress_50",
      videoUrl: "https://example.com/video.mp4",
      currentTime: 60,
      duration: 120,
    });

    expect(result50.success).toBe(true);
  });

  it("should track video completion", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.analytics.trackVideo({
      sessionId: "test_complete_123",
      eventType: "complete",
      videoUrl: "https://example.com/video.mp4",
      currentTime: 120,
      duration: 120,
    });

    expect(result.success).toBe(true);
  });

  it("should reject invalid event types", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    await expect(
      caller.analytics.trackVideo({
        sessionId: "test_session_123",
        eventType: "invalid_event" as any,
        videoUrl: "https://example.com/video.mp4",
        currentTime: 0,
        duration: 120,
      })
    ).rejects.toThrow();
  });
});
