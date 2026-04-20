import { Show, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { space } from "@/lib/fonts";
import { Brain } from 'lucide-react';
import Link from "next/link";

export default function IntroCard() {
    return (
        <div className="min-h-screen p-6 bg-[#dddddd] flex flex-col text-center items-center justify-center">
            <div className="bg-white p-4 w-full max-w-[450px] rounded-md shadow-md">
                <h1 className={`text-4xl font-semibold mb-6 ${space.className}`}>Focus<span className="text-blue-700">Forge</span></h1>
                <Show when={'signed-in'}>
                    <Button variant={'link'} className="w-full text-white bg-blue-700 mb-4">
                        <Brain />
                        <Link href={"#"}>I'm ready to improve my studying</Link>
                    </Button>
                </Show>
                <Show when={'signed-out'}>
                    <SignInButton>
                        <Button className="w-full bg-blue-700 mb-4">Sign In</Button>
                    </SignInButton>
                </Show>
                <p className="text-gray-500">&copy; Tafadzwa Sibanda {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}