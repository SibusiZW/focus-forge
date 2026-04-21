import DeleteHistoryButton from "@/components/delete-history-button";

export default function DeletePage() {
    return (
        <div className="min-h-screen p-6 flex flex-col items-center justify-center">
           <div className="p-4 w-full text-center max-w-[450px] shadow-xl rounded-md">
                <h1 className="text-3xl font-serif mb-6 font-semibold"><span className="text-red-600">Delete</span> my history</h1>
                <DeleteHistoryButton />
            </div> 
        </div>
    )
}