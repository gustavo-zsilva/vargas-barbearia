import { fetchWrapper } from "../utils/fetch";
import { UserComment } from "./UserComment";

type Review = {
    author_name: string,
    author_url: string,
    rating: number,
    relative_time_description: string,
    text: string,
}

type TestimonialsData = {
    reviews: Review[]
}

export async function Testimonials() {
    
    const { result: testimonialsData } = await fetchWrapper<{ result: TestimonialsData }>('/place/details', {
        fields: ['reviews'],
    }, {
        next: {
            revalidate: 86400 // 24h
        }
    })

    const relevantTestimonials = testimonialsData.reviews.splice(0, 4)

    return (
        <section className="flex flex-col px-mobile bg-yellow desktop:px-desktop py-16 items-center justify-center gap-16">
            <h1 className="
                text-lg
                relative
                before:content-['']
                before:absolute
                before:left-[50%]
                before:h-0.5
                before:w-[80px]
                before:ml-[-40px]
                before:top-[-30%]
                before:bg-brown
            ">
                DEPOIMENTOS
            </h1>
            <div className="
                flex
                flex-col
                gap-8
                max-w-[850px]
                text-grey
                sm-desktop:grid
                sm-desktop:grid-cols-2
                desktop:grid-cols-3
                desktop:max-w-full
                desktop:gap-14
            ">
                {relevantTestimonials.map(review => (
                    <UserComment
                        key={review.author_url}
                        review={review}
                    />
                ))}
            </div>
            <div className="flex items-center gap-16 text-grey">
                <button className="bg-yellow-light font-semibold rounded-sm shadow">
                    <a
                        href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWpsMTE5cXZr&src=2&slp=UhUIARIREg8iDS9nLzExamwxMTlxdms#ts=3"
                        target="_blank"
                        className="flex py-4 px-6"
                    >
                        Deixe o seu depoimento!
                    </a>
                </button>
                <a
                    href="https://g.co/kgs/F1i3iSc"
                    target="_blank"
                    className="underline underline-offset-2"
                >
                    Saiba mais
                </a>
            </div>
        </section>
    )
}