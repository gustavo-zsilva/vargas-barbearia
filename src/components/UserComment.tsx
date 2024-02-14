import { MdOutlineStar } from "react-icons/md"
import { BiSolidQuoteLeft } from "react-icons/bi"

type Review = {
    author_name: string,
    author_url: string,
    rating: number,
    relative_time_description: string,
    text: string,
}

type UserCommentProps = {
    review: Review,
}

export function UserComment({ review }: UserCommentProps) {

    const ratingArr = Array.from({ length: review.rating }, (value, index) => index) // [0, 1, 2, ...]
    const authorSurname = review.author_name.split(' ')[1][0] + '.'
    const formattedAuthorName = review.author_name.split(' ')[0] + ` ${authorSurname}`

    return (
        <div className="
            flex
            flex-col
            bg-yellow-light
            p-7
            gap-6
            rounded-2xl
            shadow-sm
            sm-desktop:first:col-span-2
            desktop:first:col-span-1
        ">
            <header className="flex justify-between items-center gap-8">
                <div className="flex">
                    {ratingArr.map(ratingNum => (
                        <MdOutlineStar key={ratingNum} size={26} color="#FFF" />
                    ))}
                </div>
                <span className="font-medium">
                    <a
                        href={review.author_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {formattedAuthorName}
                    </a>
                </span>
            </header>
            <main className="flex flex-col justify-between h-full">
                <div className="flex">
                    <BiSolidQuoteLeft size={26} color="#FFF" className="min-w-fit" />
                    <p className="flex flex-col h-full ml-[8px] leading-6">
                        {review.text}
                    </p>
                </div>
                <p className="mt-3 ml-[34px] opacity-80">
                    {review.relative_time_description}
                </p>
            </main>
        </div>
    )
}