CREATE TABLE "blog_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title" text NOT NULL,
	"excerpt" text NOT NULL,
	"content" text DEFAULT '' NOT NULL,
	"category" varchar(50) NOT NULL,
	"date" varchar(100) NOT NULL,
	"read_time" varchar(50) NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"published" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE INDEX "bp_slug_idx" ON "blog_posts" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "bp_category_idx" ON "blog_posts" USING btree ("category");--> statement-breakpoint
CREATE INDEX "bp_created_at_idx" ON "blog_posts" USING btree ("created_at");