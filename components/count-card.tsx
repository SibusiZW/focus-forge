import { getMessagesCount } from "@/server/messages";

export default async function CountCard() {

    const count = await getMessagesCount()

    return (
        <div className="flex flex-col p-6 w-full rounded-md border border-blue-200">
            <p className="text-sm mb-6">Total messages:</p>
            <p className="text-5xl">{count}</p>
        </div>
    )
}