import SendMessageForm from "@/components/send-message-form";
export default function NewPage() {
    return (
        <div className="p-6 items-center justify-center">
            <h1 className="mb-6 text-4xl font-bold font-serif">Create a <span className="text-blue-700">chat</span></h1>
            <SendMessageForm />
        </div>
    )
}