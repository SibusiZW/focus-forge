'use client'

import React, { useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Brain, Loader2, Trash2 } from "lucide-react"
import { generateResponse } from "@/server/openrouter"
import { toast } from "sonner"
import { createMessage } from "@/server/messages"

export default function SendMessageForm() {
    
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('');
    const [struggles, setStruggles] = useState('');
    const [timeLeft, setTimeLeft] = useState('');
    const [socialCondition, setSocialCondition] = useState('');
    const [mentalHealth, setMentalHealth] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    function clearFields() {
        setTitle('');
        setLevel('');
        setStruggles('');
        setTimeLeft('');
        setSocialCondition('');
        setMentalHealth('');
        setResponse('');
        toast.success('Cleared succesfully!')
    }

    useEffect(() => {
        const updateDb = async () => {
            await createMessage(title, level, struggles, timeLeft, socialCondition, mentalHealth);
        }

        if (response.trim() !== '') {
            updateDb();
        }
    }, [response])

    async function submitMessage(e: React.SubmitEvent) {
        e.preventDefault();
        setLoading(true)
        const aiRes = await generateResponse(level, struggles, timeLeft, socialCondition, mentalHealth);
        setLoading(false);
        setResponse(aiRes);
        toast.success("Your study plan is ready!")
    }

    return (
        <div className="w-full space-x-4 max-w-[550px]">
            <form onSubmit={submitMessage}>
                <Input onChange={(e) => setTitle(e.target.value)} className="mb-6" placeholder="Enter the desired title of your chat" value={title} required/>
                <Input onChange={(e) => setLevel(e.target.value)} className="mb-6" placeholder="Enter your academic level e.g, high school form 4 or university 1st year" value={level} required/>
                <Textarea onChange={(e) => setStruggles(e.target.value)} className="mb-6" placeholder="Describe your academic struggles or weak subjects/areas" value={struggles} required/>
                <Input onChange={(e) => setTimeLeft(e.target.value)} className="mb-6" placeholder="Enter the time left for exams eg. 2 days left for form 3 end of term 1 exams" value={timeLeft} required/>
                <Textarea onChange={(e) => setSocialCondition(e.target.value)} className="mb-6" placeholder="Describe your social condition and behaviour e.g I'm socially awkward" value={socialCondition} required/>
                <Textarea onChange={(e) => setMentalHealth(e.target.value)} className="mb-6" placeholder="Describe your your current mental health condition eg., I have ADHD" value={mentalHealth} required/>

                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-500 transition duration-500 mb-2">
                    {loading ? <Loader2 className="animate-spin"/>: <><Brain /> Generate a study plan</>}
                </Button>

                <Button onClick={clearFields} variant={'destructive'} className="w-full mb-4">
                    <Trash2 />
                    Clear fields
                </Button>

                <div className="border border-zinc-200 p-4 rounded-md shadow-md overflow-y-auto relative">{response}</div>
            </form>
        </div>
    )
}