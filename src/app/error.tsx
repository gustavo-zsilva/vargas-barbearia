'use client'

import { ComponentProps } from "react" 
import { twMerge } from "tailwind-merge"

type ErrorProps = ComponentProps<'div'> & {
    error: Error & { digest?: string },
    resetErrorBoundary: () => void,
}

export default function Error({
    error,
    resetErrorBoundary,
    className,
}: ErrorProps) {
    return (
        <div className={twMerge("flex flex-col items-center gap-4 bg-red-error text-white p-4 rounded-lg ring-4 ring-red-error ring-offset-2", className)}>
            <p className="font-semibold">Algo deu errado!</p>
            <details className="cursor-pointer p-2 rounded-sm open:ring-1 open:ring-white open:bg-red open:bg-opacity-30">
                <summary>Detalhes do erro</summary>
                <div className="ml-6 text-slate-200 line-clamp-3">
                    <p>{error.message}</p>
                </div>
            </details>
            <button
                className="
                    border-white
                    border-2
                    px-6
                    py-2
                    rounded-sm
                    focus:outline
                    focus:outline-white
                    focus:outline-offset-2
                    hover:bg-white
                    hover:bg-opacity-10
                    ease-in
                    duration-75
                "
                onClick={resetErrorBoundary}
            >
                Tentar de novo
            </button>
        </div>
    )
}