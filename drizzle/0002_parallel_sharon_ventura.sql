CREATE INDEX `ea_email_idx` ON `early_access_requests` (`email`);--> statement-breakpoint
CREATE INDEX `ea_company_idx` ON `early_access_requests` (`company`);--> statement-breakpoint
CREATE INDEX `ea_created_at_idx` ON `early_access_requests` (`created_at`);--> statement-breakpoint
CREATE INDEX `email_idx` ON `users` (`email`);--> statement-breakpoint
CREATE INDEX `open_id_idx` ON `users` (`openId`);