import CategoryContainer from "@/containers/CategoryContainer"

export default function CategoryPage({ params, searchParams }: { params: any, searchParams: any }) {
    return <main className="w-screen mx-auto">
        <CategoryContainer page={Number(searchParams.page) || 1} category={params.slug} />
    </main>
}