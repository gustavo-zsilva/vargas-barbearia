import { GoogleMapsEmbed } from '@next/third-parties/google'
import { fetchWrapper } from '../utils/fetch'

type AllPlacesData = {
    place_id: string,
}

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
        <section className="flex flex-col justify-center items-center mx-44 py-16">
            <h1 className="
                text-lg
                relative
                mb-16
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
            <div className="grid grid-cols-2 w-full gap-20">
                <div>
                    <GoogleMapsEmbed
                        apiKey={apiKey}
                        height={400}
                        width="100%"
                        mode="place"
                        q="Vargas+Barbeiro,576"
                        style="box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);"
                    />
                    <button className="uppercase text-grey font-bold bg-yellow w-full py-5 mt-10 rounded-sm shadow">
                        Ver Rotas
                    </button>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-base mb-3">Contato:</h2>
                        <p>{result.formatted_phone_number}</p>
                        <p>{result.formatted_phone_number}</p>
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