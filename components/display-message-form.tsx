import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import ReactMarkdown from 'react-markdown';

export default function DisplayMessageForm({ id }: { id: string }) {
    return (
        <div className="w-full space-x-4 max-w-[550px]">
        
            <Input onChange={() => {}} className="mb-6" placeholder="Enter the desired title of your chat" readOnly/>
            <Input onChange={() => {}} className="mb-6" placeholder="Enter your academic level e.g, high school form 4 or university 1st year" readOnly/>
            <Textarea className="mb-6" placeholder="Describe your academic struggles or weak subjects/areas" readOnly/>
            <Input onChange={() => {}} className="mb-6" placeholder="Enter the time left for exams eg. 2 days left for form 3 end of term 1 exams" readOnly/>
            <Textarea onChange={() => {}} className="mb-6" placeholder="Describe your social condition and behaviour e.g I'm socially awkward" readOnly/>
            <Textarea onChange={() => {}} className="mb-6" placeholder="Describe your your current mental health condition eg., I have ADHD" readOnly/>

            <div className="border border-zinc-200 p-4 rounded-md shadow-md overflow-y-auto relative">
                <ReactMarkdown></ReactMarkdown>
            </div>

        </div>
    )
}