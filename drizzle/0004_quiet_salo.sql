CREATE TABLE `video_analytics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`session_id` varchar(64) NOT NULL,
	`event_type` enum('play','pause','progress_25','progress_50','progress_75','complete') NOT NULL,
	`video_url` varchar(512) NOT NULL,
	`current_time` int NOT NULL,
	`duration` int NOT NULL,
	`user_agent` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `video_analytics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `va_session_idx` ON `video_analytics` (`session_id`);--> statement-breakpoint
CREATE INDEX `va_event_type_idx` ON `video_analytics` (`event_type`);--> statement-breakpoint
CREATE INDEX `va_created_at_idx` ON `video_analytics` (`created_at`);