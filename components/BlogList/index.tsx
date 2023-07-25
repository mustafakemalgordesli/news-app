import BlogCard from "../BlogCard"

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

    return data.posts
}

export default async function BlogList({ page }: { page: number }) {

    console.log(page)

    const posts = await getData(page)

    console.log(posts.length)

    return <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-evenly my-5 content-center">

        {
            posts.map((blog: any) => <BlogCard blog={blog} key={blog.id} />)
        }

    </div>

}