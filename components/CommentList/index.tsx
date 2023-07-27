const getData = async (post_id: number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/list?post_id=${post_id}`;

    console.log(url)

    const res = await fetch(url, {
        next: { revalidate: 10 }
    })

    if (!res.ok) {
        return null
    }

    const data = await res.json()

    console.log(data)

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
        <div className="m-5">
            <div className="text-start text-lg font-bold px-4 my-3">Yorumlar</div>
            {
                comments.length === 0 ?
                    <div className="px-4 my-3 text-center">Henüz yorum yapılmamış</div>
                    :
                    <div className="px-4 my-3 gap-5">
                        {
                            comments?.map((item: any) => <CommentItem comment={item} key={item.id} />)
                        }
                    </div>
            }
        </div>
    </div>
}

function CommentItem({ comment }: { comment: any }) {
    return <div>{comment.text}</div>
}