'use client'

import DisplayMessageForm from "@/components/display-message-form";
import { use } from "react"

interface ChatPageProps {
    params: Promise<{
        id: string
    }>
}

export default function ChatPage({ params }: ChatPageProps) {

    const { id } = use(params);

    return (
        <div className="p-6 items-center justify-center">
            
            <DisplayMessageForm id={id}/>  
        </div>
    )
}