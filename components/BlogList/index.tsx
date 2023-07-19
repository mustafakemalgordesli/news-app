import BlogCard from "../BlogCard"

export default function BlogList() {
    return <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-evenly">

        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

    </div>

}