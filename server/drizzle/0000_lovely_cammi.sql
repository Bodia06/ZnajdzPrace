CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"role" "user_role" NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" varchar(255) NOT NULL,
	"first_name" varchar(100),
	"last_name" varchar(100),
	"company_name" varchar(255),
	"nip" varchar(10),
	"terms_accepted_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_nip_unique" UNIQUE("nip"),
	CONSTRAINT "users_role_fields" CHECK (("users"."role" = 'candidate' AND "users"."first_name" IS NOT NULL AND "users"."last_name" IS NOT NULL)
					OR ("users"."role" = 'employer' AND "users"."company_name" IS NOT NULL AND "users"."nip" IS NOT NULL))
);
