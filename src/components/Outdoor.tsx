import { FaExternalLinkAlt } from "react-icons/fa";
import { fetchWrapper } from "../utils/fetch";

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

type PlaceData = {
    current_opening_hours: OpeningHours,
}

type AllPlacesData = {
    place_id: string,
}

async function getPlaceData() {

    const { result: placeData } = await fetchWrapper<{ result: PlaceData }>(`/place/details`, {
        fields: ['current_opening_hours/open_now', 'current_opening_hours/periods'],
    }, { cache: 'no-cache' })

    return { placeData }
}

function formatDateStrings({ close, open }: Period) {
    const closeTime = close.time.slice(0, 2) + ':' + close.time.slice(2)
    const openTime = open.time.slice(0, 2) + ':' + open.time.slice(2)

    return {
        close: { ...close, time: closeTime },
        open: { ...open, time: openTime },
    }
}

export async function Outdoor() {

    const { placeData } = await getPlaceData()

    const isOpenNow = placeData.current_opening_hours.open_now
    const workingPeriods = placeData.current_opening_hours.periods

    const date = new Date()
    const currentDay = date.getDay()
    const workingDay = formatDateStrings(workingPeriods[currentDay - 1])
    
    function getNextWorkingDay() {
        const workingPeriodsLastIndex = workingPeriods.length - 1
    
        if (workingDay.close.day === workingPeriodsLastIndex) {
            return formatDateStrings(workingPeriods[0])
        }
        // Current Day is actually the next day, because the array days count starts on 1, not 0
        return formatDateStrings(workingPeriods[currentDay])
    }

    const nextWorkingDay = getNextWorkingDay()
    // Transforms date ("2024/01/30") to weekday ("Tuesday")
    const formattedDate = new Date(nextWorkingDay.open.date
        .replaceAll('-', '/'))
        .toLocaleString('default', {
            weekday: 'long'
        })

    const styles = {
        bg: isOpenNow ? 'bg-green' : 'bg-red',
        bgDark: isOpenNow ? 'bg-green-dark' : 'bg-red-dark',
        border: isOpenNow ? 'border-green-darker' : 'border-red-darker',
    }

    return (
        <div className="w-full text-grey shadow-sm">
            <div className={`flex flex-col ${styles.bg} items-center py-3`}>
                <span className="font-bold">{isOpenNow ? 'ABERTO AGORA' : 'FECHADO'}</span>
                <span>
                    {isOpenNow ?
                        `até ${workingDay.close.time}`
                        : `abre ${currentDay === 5 ? formattedDate : 'amanhã'} ás ${nextWorkingDay.open.time}`
                    }
                </span>
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