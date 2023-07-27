"use server"

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

const getRandomizeData = async () => {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/post/list?page=1&page_max=6&randomize=true`;

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

    const data1 = getData()

    const data2 = getRandomizeData()

    const [bannerData, slideData] = await Promise.all([data1, data2])

    console.log(bannerData)

    return (
        <>
            {
                bannerData && <HeroBanner slides={bannerData} />
            }
            {/* <ToolSection /> */}
            {
                slideData && <Slide data={slideData} />
            }
            <BlogList page={page} />
        </>
    )
}