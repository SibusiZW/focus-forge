import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const messages = pgTable('messages', {
    id: uuid().primaryKey().defaultRandom().notNull().unique(),
    title: text().notNull(),
    strugglesDesc: text().notNull(),
    timeLeftDesc: text().notNull(),
    socialDesc: text().notNull(),
    mentalDesc: text().notNull(),
    dateCreated: timestamp().defaultNow()
})