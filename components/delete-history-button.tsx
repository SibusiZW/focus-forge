'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { deleteChatHistory } from "@/server/messages";
import { useRouter } from "next/navigation";

export default function DeleteHistoryButton() {

    const router = useRouter();

    function handleDelete() {
        setLoading(true);
        
        const executeDelete = async () => {
            await deleteChatHistory()
        }
        executeDelete()

        setLoading(false);

        toast.success('Deleted succesfully!')
        router.push("/dashboard")
    }

    const [loading, setLoading] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-red-600 hover:bg-red-500">
                    <Trash2 />
                    Delete my history
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center">
                <DialogTitle>Confirm deletion of history</DialogTitle>
                <Button onClick={handleDelete} variant={'destructive'}>
                    {loading ? <Loader2 className="animate-spin"/> : <><Trash2 /> Delete now</>}
                </Button>

                <DialogDescription>This action is destructive and irreversible</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}