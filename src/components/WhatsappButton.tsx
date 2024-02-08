import { FaWhatsapp } from "react-icons/fa6"

export function WhatsappButton() {
    return (
        <a
            href="https://www.whatsapp.com/product/4329414817136290/554898224490/?app_absent=0"
            target="_blank"
            className="bg-green rounded-sm shadow-sm p-2"
        >
            <FaWhatsapp size={28} color="#F8F7FF" />
        </a>
    )
}