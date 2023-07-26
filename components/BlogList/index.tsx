import BlogCard from "../BlogCard"
import Pagination from "../Pagination/Pagination";
import { redirect } from 'next/navigation';

const getData = async (page: number, category: string) => {

    const categorySearch = category !== "" ? `&c=${category}` : ""

    const url = `${process.env.NEXT_PUBLIC_API_URL}/post/list?page=${page}&page_max=8${categorySearch}`;

    const res = await fetch(url, {
        next: { revalidate: 10 }
        // cache: "no-cache"
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    if (data.status === 401) {
        redirect('/');
    }

    if (!data.success) {
        throw new Error('Failed to fetch data')
    }

    return data
}

export default async function BlogList({ page, category }: { page: number, category?: string }) {

    const { posts, total_page } = await getData(page, category || "")

    return <>
        <div className="mb-0 p-5 pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  max-w-7xl mx-auto justify-evenly content-center">
            {
                posts.map((blog: any) => <BlogCard blog={blog} key={blog.id} />)
            }
        </div>
        <Pagination currentPage={page} total_page={total_page} route="?page=" />
    </>

}