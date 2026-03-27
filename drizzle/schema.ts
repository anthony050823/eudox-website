import { boolean, index, integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin"]);
export const eventTypeEnum = pgEnum("event_type", ["play", "pause", "progress_25", "progress_50", "progress_75", "complete"]);

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = pgTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: serial("id").primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("email_idx").on(table.email),
  openIdIdx: index("open_id_idx").on(table.openId),
}));

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Early access registration requests table
 */
export const earlyAccessRequests = pgTable("early_access_requests", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
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
export const feedbackSubmissions = pgTable("feedback_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("feedback_email_idx").on(table.email),
  createdAtIdx: index("feedback_created_at_idx").on(table.createdAt),
}));

export type FeedbackSubmission = typeof feedbackSubmissions.$inferSelect;
export type InsertFeedbackSubmission = typeof feedbackSubmissions.$inferInsert;

/**
 * Video analytics tracking table
 */
export const videoAnalytics = pgTable("video_analytics", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 64 }).notNull(),
  eventType: eventTypeEnum("event_type").notNull(),
  videoUrl: varchar("video_url", { length: 512 }).notNull(),
  currentTime: integer("current_time").notNull(),
  duration: integer("duration").notNull(),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  sessionIdx: index("va_session_idx").on(table.sessionId),
  eventTypeIdx: index("va_event_type_idx").on(table.eventType),
  createdAtIdx: index("va_created_at_idx").on(table.createdAt),
}));

export type VideoAnalytic = typeof videoAnalytics.$inferSelect;
export type InsertVideoAnalytic = typeof videoAnalytics.$inferInsert;

/**
 * Blog posts table
 */
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").default("").notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  date: varchar("date", { length: 100 }).notNull(),
  readTime: varchar("read_time", { length: 50 }).notNull(),
  featured: boolean("featured").default(false).notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: index("bp_slug_idx").on(table.slug),
  categoryIdx: index("bp_category_idx").on(table.category),
  createdAtIdx: index("bp_created_at_idx").on(table.createdAt),
}));

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;
