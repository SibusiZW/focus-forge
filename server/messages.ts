'use server';

import { db } from "@/db/drizzle";
import { messages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getMessagesCount(userId: string) {
    const count = await db.$count(messages, eq(messages.userId, userId))
    return count
}