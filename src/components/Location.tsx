import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'

export function Location() {
    return (
        <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
                <FaLocationDot size={22} />
                Córrego Grande
            </span>
            <span className="underline underline-offset-2">
                <Link href="/#contact">
                    Ver rotas
                </Link> 
            </span>
        </div>
    )
}