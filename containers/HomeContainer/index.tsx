import BlogList from "@/components/BlogList"
import ToolSection from "@/components/ToolSection"
import HeroBanner from "@/components/HeroBanner";
import Slide from "@/components/Slide";

interface ContainerProps {
    page: number;
    category?: string;
}

export default function HomeContainer({ page }: ContainerProps) {
    return (
        <>
            <HeroBanner />
            {/* <ToolSection /> */}
            <Slide />
            {/* <BlogList page={page} /> */}
        </>
    )
}