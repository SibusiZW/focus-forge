import CountCard from "@/components/count-card";
import { getUser } from "@/server/auth"

export default async function DashboardPage() {
    
    const user = await getUser();

    return (
        <div className="p-4">
            <h1 className="text-4xl font-semibold mb-6">Hi, {user?.firstName}!</h1>
            <CountCard />
        </div>
    )
}