'use client'

import React, { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Brain, Loader2 } from "lucide-react"
import { generateResponse } from "@/server/openrouter"

export default function SendMessageForm() {
    
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('');
    const [struggles, setStruggles] = useState('');
    const [timeLeft, setTimeLeft] = useState('');
    const [socialCondition, setSocialCondition] = useState('');
    const [mentalHealth, setMentalHealth] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function submitMessage(e: React.SubmitEvent) {
        e.preventDefault();
        setLoading(true)
        const aiRes = await generateResponse(level, struggles, timeLeft, socialCondition, mentalHealth);
        setLoading(false);
        setResponse(aiRes);
    }

    return (
        <div className="w-full space-x-4 max-w-[550px]">
            <form onSubmit={submitMessage}>
                <Input onChange={(e) => setTitle(e.target.value)} className="mb-6" placeholder="Enter the desired title of your chat" required/>
                <Input onChange={(e) => setLevel(e.target.value)} className="mb-6" placeholder="Enter your academic level e.g, high school form 4 or university 1st year" required/>
                <Textarea onChange={(e) => setStruggles(e.target.value)} className="mb-6" placeholder="Describe your academic struggles or weak subjects/areas" required/>
                <Input onChange={(e) => setTimeLeft(e.target.value)} className="mb-6" placeholder="Enter the time left for exams eg. 2 days left for form 3 end of term 1 exams" required/>
                <Textarea onChange={(e) => setSocialCondition(e.target.value)} className="mb-6" placeholder="Describe your social condition and behaviour e.g I'm socially awkward" required/>
                <Textarea onChange={(e) => setMentalHealth(e.target.value)} className="mb-6" placeholder="Describe your your current mental health condition eg., I have ADHD" required/>

                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-500 transition duration-500 mb-8">
                    {loading ? <Loader2 className="animate-spin"/>: <><Brain /> Generate a study plan</>}
                </Button>

                <div className="border border-zinc-200 p-4 rounded-md shadow-md overflow-y-auto relative">{response}</div>
            </form>
        </div>
    )
}