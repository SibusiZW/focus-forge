'use server';

import { db } from "@/db/drizzle";
import { messages } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { getUser } from "./auth";

export async function getMessagesCount() {

    const user = await getUser();
    const userId = user?.id;

    if (userId) {
        const count = await db.$count(messages, eq(messages.userId, userId))
        return count
    }
}

export async function createMessage(title: string, level: string, struggles: string, timeLeft: string, socialCondition: string, mentalHealth: string, response: string) {
    const user = await getUser();
    const userId = user?.id
    if (userId) {
        await db.insert(messages).values({ title: title, level: level, strugglesDesc: struggles, timeLeftDesc: timeLeft, socialDesc: socialCondition, mentalDesc: mentalHealth, userId: userId, aiResponse: response })
    }
}

export async function getMessages() {
    const user = await getUser();
    const userId = user?.id

    if (userId) {
        const allMessages = await db.select().from(messages).where(eq(messages.userId, userId)).orderBy(desc(messages.dateCreated))
        return allMessages
    }
}

export async function getSingleMessage(id: string) {
    const allMessages = await db.select().from(messages).where(eq(messages.id, id)).limit(1)
    return allMessages[0];
}

export async function deleteChatHistory() {
    const user = await getUser();
    const userId = user?.id;

    if (userId) {
        await db.delete(messages).where(eq(messages.userId, userId))
    }
}