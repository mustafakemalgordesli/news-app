import BlogList from "@/components/BlogList"
import ToolSection from "@/components/ToolSection"
import HeroBanner from "@/components/HeroBanner";
import Slide from "@/components/Slide";

interface ContainerProps {
    page: number;
    category?: string;
}

const getData = async () => {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/post/list?page=1&page_max=4&order_days=7`;

    const res = await fetch(url, {
        next: { revalidate: 10 }
        // cache: "no-cache"
    })

    if (!res.ok) {
        return null
    }

    const data = await res.json()

    if (data.status === 401) {
        return null
    }

    if (!data.success) {
        return null
    }

    return data.posts
}

export default async function HomeContainer({ page }: ContainerProps) {

    const bannerData = await getData();
    return (
        <>
            {
                bannerData && <HeroBanner slides={bannerData} />
            }
            {/* <ToolSection /> */}
            <Slide />
            <BlogList page={page} />
        </>
    )
}