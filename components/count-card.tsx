import { getUser } from "@/server/auth"
import { getMessagesCount } from "@/server/messages";

export default async function CountCard() {

    const user = await getUser();
    const count = await getMessagesCount(user?.id)

    return (
        <div className="flex flex-col p-10 bg-gray-100 w-full rounded-md border border-blue-200">
            <p className="text-sm text-gray-500 mb-6">Total messages:</p>
            <p className="text-5xl">{count}</p>
        </div>
    )
}