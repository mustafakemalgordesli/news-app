"use client"

import Link from 'next/link';
import DeleteModal from '@/components/DeleteModal';
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios"

const TableItem = ({ comment, token }: { comment: any, token: string }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleDelete = async () => {

        const reqData = {
            comment_id: comment.id
        }

        const res = await axios.post("/api/comment/delete", reqData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        const { success } = res.data;

        if (success) {
            const nextUrl = searchParams.get("next");
            // @see: https://github.com/vercel/next.js/discussions/44149
            router.push(nextUrl ?? "/admin/comments");
            router.refresh();
        } else {
            // Make your shiny error handling with a great user experience
            alert("Comment not deleted");
        }
    }

    const handleChangeSatus = async () => {

        const reqData = {
            id: comment.id,
            show_status: !comment.show_status
        }

        const res = await axios.post("/api/comment/changestatus", reqData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        const { success } = res.data;

        if (success) {
            const nextUrl = searchParams.get("next");
            // @see: https://github.com/vercel/next.js/discussions/44149
            router.push(nextUrl ?? "/admin/comments");
            router.refresh();
        } else {
            // Make your shiny error handling with a great user experience
            alert("Comment status not changed");
        }
    }

    return <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            {comment.id}
        </th>
        <td className="px-6 py-4">
            {comment.user_name}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
            {comment.text}
        </td>
        <td className="px-6 py-4">
            {JSON.stringify(comment.show_status)}
        </td>
        <td className='px-6 py-4 align-middle bg-gray-50 dark:bg-gray-800'>
            <button onClick={handleChangeSatus} type="button" className="text-purple-700 mx-2 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Change Visibility</button>
            <DeleteModal onClick={handleDelete} />
        </td>
    </tr>
}

export default TableItem