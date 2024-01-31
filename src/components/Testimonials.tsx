import { fetchWrapper } from "../utils/fetch";
import { UserComment } from "./UserComment";

type AllPlacesData = {
    place_id: string,
}

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

    const { results: allPlacesData } = await fetchWrapper<{ results: AllPlacesData[] }>(`/geocode`, {
        address: 'Vargas+Barbeiro,576',
    })

    const placeId = allPlacesData[0].place_id

    const { result: testimonialData } = await fetchWrapper<{ result: TestimonialsData }>('/place/details', {
        place_id: placeId,
        fields: ['reviews'],
    })

    const relevantTestimonials = testimonialData.reviews.splice(0, 3)

    return (
        <section className="flex flex-col bg-yellow px-44 py-16 items-center justify-center gap-16">
            <h1 className="
                text-lg
                relative
                before:content-['']
                before:absolute
                before:left-0
                before:h-0.5
                before:w-[80px]
                before:top-[-30%]
                before:bg-brown
                before:translate-x-1/2
            ">
                DEPOIMENTOS
            </h1>
            <div className="grid grid-cols-3 gap-24 text-grey">
                {relevantTestimonials.map(review => (
                    <UserComment
                        key={review.author_url}
                        review={review}
                    />
                ))}
            </div>
            <div className="flex items-center gap-16 text-grey">
                <button className="bg-yellow-light font-semibold rounded-sm py-4 px-6 shadow">
                    Deixe o seu depoimento!
                </button>
                <a href="#" className="underline underline-offset-2">Saiba mais</a>
            </div>
        </section>
    )
}