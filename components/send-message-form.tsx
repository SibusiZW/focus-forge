'use client'

import React from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Brain } from "lucide-react"

export default function SendMessageForm() {
    async function generateResponse(e: React.SubmitEvent) {

    }

    return (
        <div className="w-full space-x-4 max-w-[550px]">
            <form onSubmit={generateResponse}>
                <Input className="mb-6" placeholder="Enter the desired title of your chat" required/>
                <Textarea className="mb-6" placeholder="Describe your academic struggles or weak subjects/areas" required/>
                <Input className="mb-6" placeholder="Enter the time left for exams eg. 2 days left for form 3 end of term 1 exams" required/>
                <Textarea className="mb-6" placeholder="Describe your social condition and behaviour e.g I'm socially awkward" required/>
                <Textarea className="mb-6" placeholder="Describe your your current mental health condition eg., I have ADHD" required/>

                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-500 transition duration-500 mb-8">
                    <Brain />
                    Generate a study plan
                </Button>

                <div className="border border-zinc-200 p-4 rounded-md shadow-md overflow-y-auto relative"></div>
            </form>
        </div>
    )
} 