import { kenia } from '../fonts'
import { FaPhone } from 'react-icons/fa6'

import { WhatsappButton } from './WhatsappButton'

export function Header() {
    return (
        <header className="bg-yellow py-4 flex items-center justify-between px-44 shadow-md">
            <h1 className={`text-xl ${kenia.className}`}>Vargas Barbearia</h1>
            <div className="flex gap-8">
                <p className="flex gap-2.5 self-center">
                    Atendimento:
                    <a href="#" className="flex items-center gap-2.5">
                        <FaPhone />
                        (xx) xxxx-xxx
                    </a>
                </p>
                <button className="bg-brown px-6 py-2 text-grey font-bold rounded-sm shadow-sm">
                    Agendar
                </button>
                <WhatsappButton />
            </div>
        </header>
    )
}