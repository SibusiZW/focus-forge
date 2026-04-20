interface ChatPageProps {
    params: {
        id: string
    }
}

export default async function ChatPage({ params }: ChatPageProps) {
    return (
        <div>
            {params.id}
        </div>
    )
}