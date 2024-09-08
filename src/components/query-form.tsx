'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { submitQuery } from './actions/actions'

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300"
            disabled={pending}
        >
            {pending ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                </>
            ) : (
                <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Query
                </>
            )}
        </Button>
    )
}

export default function QuerySection() {
    const router = useRouter()
    const formRef = useRef<HTMLFormElement>(null)

    async function handleSubmit(formData: FormData) {
        const result = await submitQuery(formData)
        if (result.success) {
            alert("Thank You")
            formRef.current?.reset()
            router.refresh()
        } else {
            alert("An error occurred. Please try again.")
        }
    }

    return (
        <section id='query' className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Ask Us Anything
            </h2>
            <form ref={formRef} action={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <Input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                    required
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                    required
                />
                <Input
                    name="phoneNumber"
                    type="tel"
                    placeholder="Your Phone Number"
                    className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                    required
                />
                <Input
                    name="campusName"
                    type="text"
                    placeholder="Campus Name"
                    className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                    required
                />
                <Input
                    name="location"
                    type="text"
                    placeholder="Location"
                    className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                    required
                />
                <Textarea
                    name="question"
                    placeholder="Your Question"
                    className="bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400"
                    required
                />
                <SubmitButton />
            </form>
        </section>
    )
}