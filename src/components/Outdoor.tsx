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
}

type PlaceData = {
    current_opening_hours: OpeningHours,
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

    const currentDay = new Date().getDay()

    const workingDayIndex = workingPeriods.findIndex(period => period.open.day === currentDay)
    const workingDay = workingDayIndex > -1 ? formatDateStrings(workingPeriods[workingDayIndex]) : null
    
    function getNextWorkingDay() {
        const lastWorkingDay = workingPeriods.length

        if (workingDay?.open.day === lastWorkingDay) {
            return formatDateStrings(workingPeriods[0])
        }

        return formatDateStrings(workingPeriods[workingDayIndex + 1])
    }

    const nextWorkingDay = getNextWorkingDay()

    // Transforms date ("2024/01/30") to weekday ("Tuesday")
    const formattedDate = new Date(nextWorkingDay.open.date
        .replaceAll('-', '/'))
        .toLocaleString('default', {
            weekday: 'long'
        })

    return (
        <div className="w-full text-grey shadow-sm">
            <div
                data-open={isOpenNow}
                className="
                    flex
                    flex-col
                    data-[open=true]:bg-green
                    data-[open=false]:bg-red
                    items-center
                    py-3
                    "
                >
                <span className="font-bold">{isOpenNow ? 'ABERTO AGORA' : 'FECHADO'}</span>
                <span>
                    {isOpenNow ?
                        `até ${workingDay?.close.time}`
                        : `abre ${currentDay === 6 ? formattedDate : 'amanhã'} ás ${nextWorkingDay.open.time}`
                    }
                </span>
            </div>
            <button
                data-open={isOpenNow}
                className="
                    data-[open=false]:bg-red-dark
                    data-[open=true]:bg-green-dark
                    w-full
                    rounded-b-lg
                    border-t-2
                    data-[open=false]:border-red-darker
                    data-[open=true]:border-green-darker
                    hover:brightness-95
                    "
                >
                <a
                    href="https://www.whatsapp.com/product/4329414817136290/554898224490/?app_absent=0"
                    target="_blank"
                    className="flex py-2.5 items-center justify-center gap-3"
                >
                    Agendar horário
                    <FaExternalLinkAlt size={16} />
                </a>
            </button>
        </div>
    )
}