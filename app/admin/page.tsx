import { cookies } from 'next/headers';
import * as React from "react";

async function getData(token: string, page: any = 1) {

    if (!token) {
        throw new Error('Token not found')
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/post/list?page=${page}&page_max=10`, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 10 }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    if (!data.success) {
        throw new Error('Failed to fetch data')
    }

    console.log(data)

    return data.posts
}

export default async function Admin() {

    const cookieStore = cookies()

    const token = cookieStore.get('token')

    const tokenValue: string = token?.value || ""

    const posts = await getData(tokenValue)

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
                            Show Status
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((item: any) =>
                            <TableItem key={item.id} blog={item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


