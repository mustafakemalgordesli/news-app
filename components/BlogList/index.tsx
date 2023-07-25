import BlogCard from "../BlogCard"
import Pagination from "../Pagination/Pagination";

const getData = async (page: number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/post/list?page=${page}&page_max=8`;

    const res = await fetch(url, {
        next: { revalidate: 1 }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()


    if (!data.success) {
        throw new Error('Failed to fetch data')
    }

    return data
}

export default async function BlogList({ page }: { page: number }) {

    const { posts, total_page } = await getData(page)

    return <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-evenly my-5">
            {
                posts.map((blog: any) => <BlogCard blog={blog} key={blog.id} />)
            }
        </div>
        <Pagination currentPage={page} total_page={total_page} route="?page=" />
    </>

}