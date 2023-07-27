const getData = async (post_id: number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/list?post_id=${post_id}`;

    const res = await fetch(url, {
        next: { revalidate: 10 }
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

    return data
}

export default async function CommentList({ post_id }: { post_id: number }) {

    const data = await getData(post_id)

    const comments = data ? data.posts : []

    return <div className="max-w-screen-lg mx-auto">
        <div className="m-5 px-4">
            <div className="text-start text-lg font-bold my-1">Yorumlar</div>
            {
                comments.length === 0 ?
                    <div className="px-4 my-3 text-center">Henüz yorum yapılmamış</div>
                    :
                    <div className="my-3 gap-5 border-t-2">
                        {
                            comments?.map((item: any) => <CommentItem comment={item} key={item.id} />)
                        }
                    </div>
            }
        </div>
    </div >
}

function CommentItem({ comment }: { comment: any }) {

    const date = new Date(comment.publishing_date)

    return <article className="py-2 mb-2 border-b-2">
        <div className="mb-1">
            <div className="flex items-center font-medium">
                <div className="text-center">{comment.user_name}</div>
                <div className="ml-5 text-center text-sm text-gray-500">{date.getFullYear()}-{date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth()}-{date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}</div>
            </div>
        </div>
        <p className="text-gray-800">{comment.text}</p>
    </article>

} 