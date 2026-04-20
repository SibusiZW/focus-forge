'use server';

import { db } from "@/db/drizzle";
import { messages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getUser } from "./auth";

export async function getMessagesCount() {

    const user = await getUser();
    const userId = user?.id;

    if (userId) {
        const count = await db.$count(messages, eq(messages.userId, userId))
        return count
    }
}

export async function createMessage() {}