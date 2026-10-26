ALTER TABLE "offers" ADD COLUMN "levels" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "salary_contract" text;--> statement-breakpoint
UPDATE "offers" SET "levels" = ARRAY["level"] WHERE "level" IS NOT NULL;