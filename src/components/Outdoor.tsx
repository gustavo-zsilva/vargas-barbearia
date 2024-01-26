import { FaExternalLinkAlt } from "react-icons/fa";
import { GoogleMapsEmbed } from '@next/third-parties/google'

type Period = {
    close: {
        date: string,
        day: number,
        time: string,
    },
    open: {
        date: string,
        day: number,
        time: string,
    }
}

type OpeningHours = {
    open_now: boolean,
    periods: Period[],
    weekday_text: string,
}

type Result = {
    current_opening_hours: OpeningHours,
}

async function getData() {
    const apiKey = process.env.GOOGLE_API_KEY

    const placesData = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Vargas+Barbeiro,576&&key=${apiKey}`)
    if (!placesData.ok) {
        throw new Error('Failed to fetch data')
    }

    const { results } = await placesData.json()
    const placeId = results[0].place_id

    const placeData = await fetch(`
        https://maps.googleapis.com/maps/api/place/details/json?fields=current_opening_hours&place_id=${placeId}&key=${apiKey}
    `, {
        next: {
            revalidate: 1200 // 20 Min
        },
        headers: {
            'Accept-Language': 'pt-BR',
            // 'Authorization': apiKey?.toString()
        }
    })

    if (!placeData.ok) {
        throw new Error('Failed to fetch place data')
    }

    const { result }: { result: Result } = await placeData.json()

    return { result }
}

export async function Outdoor() {

    const { result } = await getData()

    const isOpenNow = result.current_opening_hours.open_now
    const workingPeriods = result.current_opening_hours.periods

    const styles = {
        bg: isOpenNow ? 'bg-green' : 'bg-red',
        bgDark: isOpenNow ? 'bg-green-dark' : 'bg-red-dark',
        border: isOpenNow ? 'border-green-darker' : 'border-red-darker',
    }

    const date = new Date()
    const currentDay = date.getDay()

    const workingDay = workingPeriods.filter(({ close, open }) => {
        if (close.day === currentDay) {
            
            // Formatting strings
            close.time = close.time.slice(0, 2) + ':' + close.time.slice(2)
            open.time = open.time.slice(0, 2) + ':' + open.time.slice(2)

            return { close, open }
        }
    })[0]

    return (
        <div className="w-full text-grey shadow-sm">
            <div className={`flex flex-col ${styles.bg} items-center py-3`}>
                <span className="font-bold">{isOpenNow ? 'ABERTO AGORA' : 'FECHADO'}</span>
                <span>até {workingDay.close.time}</span>
            </div>
            <button className={`${styles.bgDark} w-full rounded-b-lg border-t-2 ${styles.border} hover:brightness-95`}>
                <a href="#" className="flex py-2.5 items-center justify-center gap-3">
                    Agendar horário
                    <FaExternalLinkAlt size={16} />
                </a>
            </button>
            
        </div>
    )
}