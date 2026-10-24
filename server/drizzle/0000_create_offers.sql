CREATE TABLE "offers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"company" text NOT NULL,
	"description" text NOT NULL,
	"requirements" text NOT NULL,
	"location" text NOT NULL,
	"contract_type" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
