"use client"
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

export default function CreateBlogForm({ token }: { token: string }) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const res = await axios.post(`/api/category/create`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        const { success } = res.data

        if (success) {
            const nextUrl = searchParams.get("next");
            // @see: https://github.com/vercel/next.js/discussions/44149
            router.push(nextUrl ?? "/admin/categories");
            router.refresh();
        } else {
            // Make your shiny error handling with a great user experience
            alert("Category Add Failed");
        }
    };

    return <form className="mx-auto space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
}