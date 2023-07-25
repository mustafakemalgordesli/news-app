import HomeContainer from "@/containers/HomeContainer"

export default function CategoryPage({ params, searchParams }: { params: any, searchParams: any }) {
    return <main className="w-screen mx-auto">
        <HomeContainer page={Number(searchParams.page) || 1} category={params.slug} />
    </main>
}