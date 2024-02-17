import { FaCheck } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

export function About() {
    return (
        <ul className="text-sm min-[480px]:leading-8 min-[480px]:text-base mb-24 grid grid-cols-2 gap-8 mt-8 desktop:mb-0">
            
            <div className="flex col-span-2 items-center gap-4">
                <h2>
                    Comodidades
                </h2>
                <hr className="flex border-1 flex-1 rounded-full" />
            </div>

            <li className="flex items-center gap-4">
                <FaCheck size={24} className="min-w-fit" />
                Banheiro
            </li>
            <li className="flex items-center gap-4">
                <FaCheck size={24} className="min-w-fit" />
                Banheiro de gênero neutro
            </li>
            <li className="flex items-center gap-4">
                <FaCheck size={24} className="min-w-fit" />
                Empresa que acolhe a comunidade LGBTQ+
            </li>
            <li className="flex items-center gap-4">
                <FaRegCalendarCheck size={24} className="min-w-fit" />
                Necessário fazer agendamento
            </li>
            
            <div className="flex col-span-2 items-center gap-4">
                <h2>
                    Pagamento
                </h2>
                <hr className="flex border-1 flex-1 rounded-full" />
            </div>

            <li className="flex items-center gap-4">
                <MdOutlinePayment size={24} className="min-w-fit" />
                Cartão de débito
            </li>
            <li className="flex items-center gap-4">
                <FaCheck size={24} className="min-w-fit" />
                Pagamentos por dispositivo móvel via NFC
            </li>
        </ul>
    )
}