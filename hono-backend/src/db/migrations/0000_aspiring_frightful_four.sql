CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
