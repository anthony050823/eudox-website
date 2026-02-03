CREATE TABLE `feedback_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `feedback_submissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `feedback_email_idx` ON `feedback_submissions` (`email`);--> statement-breakpoint
CREATE INDEX `feedback_created_at_idx` ON `feedback_submissions` (`created_at`);