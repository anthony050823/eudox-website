CREATE TYPE "public"."event_type" AS ENUM('play', 'pause', 'progress_25', 'progress_50', 'progress_75', 'complete');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "early_access_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"email" varchar(320) NOT NULL,
	"company" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"message" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feedback_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(320) NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"openId" varchar(64) NOT NULL,
	"name" text,
	"email" varchar(320),
	"loginMethod" varchar(64),
	"role" "role" DEFAULT 'user' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	"lastSignedIn" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_openId_unique" UNIQUE("openId")
);
--> statement-breakpoint
CREATE TABLE "video_analytics" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" varchar(64) NOT NULL,
	"event_type" "event_type" NOT NULL,
	"video_url" varchar(512) NOT NULL,
	"current_time" integer NOT NULL,
	"duration" integer NOT NULL,
	"user_agent" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "ea_email_idx" ON "early_access_requests" USING btree ("email");--> statement-breakpoint
CREATE INDEX "ea_company_idx" ON "early_access_requests" USING btree ("company");--> statement-breakpoint
CREATE INDEX "ea_created_at_idx" ON "early_access_requests" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "feedback_email_idx" ON "feedback_submissions" USING btree ("email");--> statement-breakpoint
CREATE INDEX "feedback_created_at_idx" ON "feedback_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "open_id_idx" ON "users" USING btree ("openId");--> statement-breakpoint
CREATE INDEX "va_session_idx" ON "video_analytics" USING btree ("session_id");--> statement-breakpoint
CREATE INDEX "va_event_type_idx" ON "video_analytics" USING btree ("event_type");--> statement-breakpoint
CREATE INDEX "va_created_at_idx" ON "video_analytics" USING btree ("created_at");