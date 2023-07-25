import BlogList from "@/components/BlogList"
import ToolSection from "@/components/ToolSection"
import HeroBanner from "@/components/HeroBanner";
import Slide from "@/components/Slide";

export default function Home({ params, searchParams }: { params: any, searchParams: any }) {

  return (
    <main className="max-w-screen-xl mx-auto">
      <HeroBanner />
      {/* <ToolSection /> */}
      <Slide />
      { <BlogList page={Number(searchParams.page) || 1} /> }
    </main>
  )
}


