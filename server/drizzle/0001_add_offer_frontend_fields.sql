ALTER TABLE "offers" ADD COLUMN "address" text;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "latitude" double precision;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "longitude" double precision;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "contracts" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "mode" text;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "level" text;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "workload" text;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "salary_from" integer;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "salary_to" integer;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "valid_until" date;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "tags" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "duties" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "benefits" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "recruitment" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "skills" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
UPDATE "offers" SET "contracts" = ARRAY["contract_type"] WHERE "contract_type" <> '';