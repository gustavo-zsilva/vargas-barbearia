import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'

import { FaWhatsapp } from "react-icons/fa6"

type ButtonProps = ComponentProps<'button'>

export function WhatsappButton({ className }: ButtonProps) {
    return (
        <a
            href="https://www.whatsapp.com/product/4329414817136290/554898224490/?app_absent=0"
            target="_blank"
            className={twMerge("bg-green rounded-sm shadow-sm p-2 w-fit", className )}
        >
            <FaWhatsapp size={28} color="#F8F7FF" />
        </a>
    )
}