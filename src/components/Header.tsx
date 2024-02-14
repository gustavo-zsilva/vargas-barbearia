import { kenia } from '../fonts'

import { FaPhone } from 'react-icons/fa6'
import { WhatsappButton } from './WhatsappButton'

import { fetchWrapper } from '../utils/fetch'

type Result = {
    formatted_phone_number: string,
}

export async function Header() {

    const { result } = await fetchWrapper<{ result: Result }>('/place/details', {
        fields: ['formatted_phone_number']
    })
    const phoneNumber = result.formatted_phone_number

    return (
        <header className="
            bg-yellow
            py-4
            px-mobile
            flex
            flex-col
            items-center
            gap-2
            shadow-md
            sm-desktop:flex-row
            sm-desktop:justify-between
            sm-desktop:gap-0
            sm-desktop:px-sm-desktop
            desktop:px-desktop
        ">
            <h1 className={`text-xl ${kenia.className} cursor-pointer`}>Vargas Barbearia</h1>
            <div className="flex flex-col-reverse gap-5 sm-desktop:flex-row">
                <p className="flex gap-2.5 self-center">
                    Atendimento:
                    <a
                        href={`tel:${phoneNumber}`}
                        target="_blank"
                        className="flex items-center gap-2.5"
                    >
                        <FaPhone />
                        {phoneNumber}
                    </a>
                </p>
                <button className="bg-brown text-grey font-bold rounded-sm shadow-sm">
                    <a
                        href="https://www.whatsapp.com/product/4329414817136290/554898224490/?app_absent=0"
                        target="_blank"
                        className="flex flex-1 py-3 sm-desktop:px-6 h-full items-center justify-center"
                    >
                        Agendar
                    </a>
                </button>
                <WhatsappButton className="hidden sm-desktop:flex" />
            </div>
        </header>
    )
}