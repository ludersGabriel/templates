CREATE TABLE IF NOT EXISTS "client" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"cnpj" varchar(20) NOT NULL,
	"industry" varchar(50),
	"hq_address" varchar(255),
	"phone" varchar(20),
	"email" varchar(255),
	"contact_person" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "client_cnpj_unique" UNIQUE("cnpj"),
	CONSTRAINT "client_email_unique" UNIQUE("email")
);
