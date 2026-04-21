'use client'

import { getSingleMessage } from "@/server/messages";
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import { Message } from "@/db/schema";

export default function DisplayMessageForm({ id }: { id: string }) {

    const [message, setMessage] = useState<Message>();

    useEffect(() => {
        const getMessage = async () => {
            const msg = await getSingleMessage(id);
            setMessage(msg);
        }
        getMessage();
    }, [])

    return (
        <div className="w-full space-x-4 max-w-[550px]">
            <h1 className="mb-6 text-4xl font-bold font-serif">{message?.title}</h1>

            <Input className="mb-6" placeholder="Enter your academic level e.g, high school form 4 or university 1st year" onChange={() => {}} value={message?.level}/>
            <Textarea className="mb-6" placeholder="Describe your academic struggles or weak subjects/areas" onChange={() => {}} value={message?.strugglesDesc}/>
            <Input className="mb-6" placeholder="Enter the time left for exams eg. 2 days left for form 3 end of term 1 exams" onChange={() => {}} value={message?.timeLeftDesc}/>
            <Textarea className="mb-6" placeholder="Describe your social condition and behaviour e.g I'm socially awkward" onChange={() => {}} value={message?.socialDesc}/>
            <Textarea className="mb-6" placeholder="Describe your your current mental health condition eg., I have ADHD" onChange={() => {}} value={message?.mentalDesc}/>

            <div className="border border-zinc-200 p-4 rounded-md shadow-md overflow-y-auto relative">
                <ReactMarkdown>{message?.aiResponse}</ReactMarkdown>
            </div>

        </div>
    )
}