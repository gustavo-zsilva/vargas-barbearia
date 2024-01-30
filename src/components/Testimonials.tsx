import { fetchWrapper } from "../utils/fetch";
import { UserComment } from "./UserComment";

export async function Testimonials() {

    const testimonialData = await fetchWrapper('/place/details')

    return (
        <section className="flex bg-yellow px-44 py-16 items-center justify-center flex-col">
            <h1 className="text-lg relative before:content-[''] before:absolute before:left-1/10 before:h-0.5 before:w-10/12 before:bg-brown">
                DEPOIMENTOS
            </h1>
            <div className="flex gap-24 text-grey mt-16">
                <UserComment />
                <UserComment />
                <UserComment />
            </div>
        </section>
    )
}