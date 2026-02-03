import { index, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("email_idx").on(table.email),
  openIdIdx: index("open_id_idx").on(table.openId),
}));

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Early access registration requests table
 */
export const earlyAccessRequests = mysqlTable("early_access_requests", {
  id: int("id").autoincrement().primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("ea_email_idx").on(table.email),
  companyIdx: index("ea_company_idx").on(table.company),
  createdAtIdx: index("ea_created_at_idx").on(table.createdAt),
}));

export type EarlyAccessRequest = typeof earlyAccessRequests.$inferSelect;
export type InsertEarlyAccessRequest = typeof earlyAccessRequests.$inferInsert;
/**
 * Feedback submissions table
 */
export const feedbackSubmissions = mysqlTable("feedback_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("feedback_email_idx").on(table.email),
  createdAtIdx: index("feedback_created_at_idx").on(table.createdAt),
}));

export type FeedbackSubmission = typeof feedbackSubmissions.$inferSelect;
export type InsertFeedbackSubmission = typeof feedbackSubmissions.$inferInsert;

/**
 * Video analytics tracking table
 */
export const videoAnalytics = mysqlTable("video_analytics", {
  id: int("id").autoincrement().primaryKey(),
  sessionId: varchar("session_id", { length: 64 }).notNull(),
  eventType: mysqlEnum("event_type", ["play", "pause", "progress_25", "progress_50", "progress_75", "complete"]).notNull(),
  videoUrl: varchar("video_url", { length: 512 }).notNull(),
  currentTime: int("current_time").notNull(), // in seconds
  duration: int("duration").notNull(), // in seconds
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  sessionIdx: index("va_session_idx").on(table.sessionId),
  eventTypeIdx: index("va_event_type_idx").on(table.eventType),
  createdAtIdx: index("va_created_at_idx").on(table.createdAt),
}));

export type VideoAnalytic = typeof videoAnalytics.$inferSelect;
export type InsertVideoAnalytic = typeof videoAnalytics.$inferInsert;
