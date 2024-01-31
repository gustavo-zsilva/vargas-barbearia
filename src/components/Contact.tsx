import { GoogleMapsEmbed } from '@next/third-parties/google'

export function Contact() {
    const apiKey = process.env.GOOGLE_API_KEY || ""

    return (
        <section className="flex flex-col justify-center items-center mx-44 py-16">
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
                before:translate-x-[50%]
            ">
                ENTRE EM CONTATO
            </h1>
            <div className="columns-2 w-full gap-20">
                <div className="">
                    <GoogleMapsEmbed
                        apiKey={apiKey}
                        height={400}
                        width="100%"
                        mode="place"
                        q="Vargas+Barbeiro,576"
                    />
                </div>
                <div className="border-2 border-red">3</div>
            </div>
        </section>
    )
}