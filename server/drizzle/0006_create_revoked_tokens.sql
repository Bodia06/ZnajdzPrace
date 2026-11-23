CREATE TABLE "revoked_tokens" (
	"jti" uuid PRIMARY KEY NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE INDEX "revoked_tokens_expires_at_idx" ON "revoked_tokens" USING btree ("expires_at");