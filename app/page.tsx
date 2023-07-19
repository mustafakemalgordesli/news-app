import BlogList from "@/components/BlogList"
import BlogCard from "@/components/BlogCard"
import ToolSection from "@/components/ToolSection"

export default function Home() {
  return (

    <main className="max-w-screen-xl mx-auto">
      <BlogList />
      {/* <BlogCard /> */}

      <ToolSection />
    </main>

  )
}
