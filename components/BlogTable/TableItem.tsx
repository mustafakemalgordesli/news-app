"use client"

import Image from 'next/image';
import Link from 'next/link';
import DeleteModal from '@/components/DeleteModal';
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation";

const TableItem = ({ blog, token }: { blog: any, token: string }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleDelete = async () => {

        const reqData = {
            slug: blog.slug
        }

        const res = await axios.post("/api/blog/delete", reqData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        const { success } = res.data;

        if (success) {
            const nextUrl = searchParams.get("next");
            // @see: https://github.com/vercel/next.js/discussions/44149
            router.push(nextUrl ?? "/admin");
            router.refresh();
        } else {
            // Make your shiny error handling with a great user experience
            alert("Blog not deleted");
        }
    }

    return <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            {blog.id}
        </th>
        <td className="px-6 py-4 max-w-[250px]">
            {blog.title}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
            {blog.category.title}
        </td>
        <td className="px-6 py-4 flex justify-center items-center">
            {
                blog.image !== "" ? <Image src={process.env.NEXT_PUBLIC_IMAGE_SERVICE + blog.image} width={75} height={50} alt="blog image" /> : null
            }
        </td>
        <td className='bg-gray-50 dark:bg-gray-800'>
            {
                blog.show_status.toString()
            }
        </td>
        <td className='px-6 py-4  align-middle'>
            <Link href={`/admin/${blog.slug}`} className="text-purple-700 mx-2 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Details</Link>
            <Link href={`/admin/update/${blog.slug}`} className="text-yellow-400 mx-2 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Update</Link>
            {/* <button type="button" className="text-red-700 mx-2 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button> */}
            <DeleteModal onClick={handleDelete} />
        </td>
    </tr>
}

export default TableItem