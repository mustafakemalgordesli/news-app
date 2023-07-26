import BlogList from "@/components/BlogList"

interface ContainerProps {
    page: number;
    category?: string;
}

export default function CategoryContainer({ page, category }: ContainerProps) {
    return (
        <>
            <BlogList page={page} category={category || ""} />
        </>
    )
}