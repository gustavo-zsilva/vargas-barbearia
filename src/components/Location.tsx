import { FaLocationDot } from 'react-icons/fa6'

export function Location() {
    return (
        <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
                <FaLocationDot size={22} />
                Córrego Grande
            </span>
            <span className="underline">
                <a href="#">
                    Ver rotas
                </a>
            </span>
        </div>
    )
}