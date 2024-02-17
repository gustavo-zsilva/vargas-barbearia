import { GoogleMapsEmbed } from '@next/third-parties/google'
import { fetchWrapper } from '../utils/fetch'

type ContactData = {
    formatted_phone_number: string,
    formatted_address: string,
    current_opening_hours: {
        weekday_text: string[],
    }
}

export async function Contact() {
    const apiKey = process.env.GOOGLE_API_KEY || ""

    const { result } = await fetchWrapper<{ result: ContactData }>(`/place/details`, {
        fields: ['formatted_phone_number', 'formatted_address', 'current_opening_hours/weekday_text']
    })

    return (
        <section
            id="contact"
            className="flex flex-col justify-center items-center mx-mobile desktop:mx-desktop py-16 min-h-[80vh]"
        >
            <h1 className="
                text-lg
                relative
                mb-16
                before:content-['']
                before:absolute
                before:left-[50%]
                before:h-0.5
                before:w-[80px]
                before:ml-[-40px]
                before:top-[-30%]
                before:bg-brown
            ">
                ENTRE EM CONTATO
            </h1>
            <div className="desktop:grid desktop:grid-cols-2 w-full gap-20">
                <div className="mb-8 desktop:mb-0">
                    <GoogleMapsEmbed
                        apiKey={apiKey}
                        height={400}
                        width="100%"
                        mode="place"
                        q="Vargas+Barbeiro,576"
                        style="box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);"
                    />
                    <button className="flex justify-center uppercase text-grey font-bold bg-yellow w-full mt-10 rounded-sm shadow">
                        <a
                            href="https://www.google.com/maps/dir//Vargas+Barbeiro/data=!4m8!4m7!1m0!1m5!1m1!1s0x952739c105df5175:0x17a91eb1e6682089!2m2!1d-48.511123399999995!2d-27.5999034"
                            target="_blank"
                            className="py-5 w-full"
                        >
                            Ver Rotas
                        </a>
                    </button>
                </div>
                
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-base mb-3">Contato:</h2>
                        <p>{result.formatted_phone_number}</p>
                        <p>(48) 99822-4490</p>
                    </div>
                    <div>
                        <h2 className="text-base mb-3">Endereço:</h2>
                        <p>{result.formatted_address}</p>
                    </div>
                    <div>
                        <h2 className="text-base mb-3">Horários de funcionamento:</h2>
                        {result.current_opening_hours.weekday_text.map(weekday => {
                            const shortWeekday = weekday.split(' ')[0].slice(0,3)
                            const schedule = weekday.split(' ')[1]
                            
                            return (
                                <p key={weekday} className="flex">
                                    <span className="w-14">{`${shortWeekday}.:`}</span>
                                    <span>{schedule}</span>
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}