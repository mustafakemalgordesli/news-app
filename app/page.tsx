import HomeContainer from "@/containers/HomeContainer"

export default function Home({ params, searchParams }: { params: any, searchParams: any }) {
  return (
    <main className="w-screen mx-auto">
      <HomeContainer page={Number(searchParams.page) || 1} />
    </main>
  )
}


