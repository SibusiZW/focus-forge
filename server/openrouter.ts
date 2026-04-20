'use server';

import { OpenRouter } from '@openrouter/sdk'

const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY! })

export async function generateResponse(level: string, struggles: string, timeLeft: string, socialCondition: string, mentalHealth: string) {
    try {
        const response = await client.chat.send({
        chatRequest: {
            model: 'google/gemma-4-31b-it',
            messages: [
                { role: 'system', content: "You are a retired powerhouse psychologist which specialises in child education. You also use your vast experience to formulate effective and flexible study plans for students at different academic levels. Your task is to formulate a study plan for a user when given some info involving the user your answers should work for all genders and should be clear and non-biased" },
                { role: 'user', content: `
                    Hi Can you help formulate an effective study plan for me using the following info:
                    My Academic level: ${level},
                    My struggles/weak points: ${struggles},
                    The time left for exams: ${timeLeft},
                    My social state and condition: ${socialCondition},
                    My mental health condition: ${mentalHealth}
                ` }
            ]
        }
    })

    return response.choices[0].message.content
    } catch (e) {
        console.error(e)
        return "An error occured!!"
    }
}