CREATE TABLE IF NOT EXISTS "credit_card" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"client_id" uuid NOT NULL,
	"card_number" varchar(20) NOT NULL,
	"cardholder_name" varchar(255) NOT NULL,
	"expiration_date" date NOT NULL,
	"cvv" varchar(5) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "credit_card_card_number_unique" UNIQUE("card_number")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "credit_card" ADD CONSTRAINT "credit_card_client_id_client_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."client"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
