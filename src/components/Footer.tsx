import { WhatsappButton } from "./WhatsappButton";
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="flex justify-between items-center px-desktop min-h-[20vh] bg-grey shadow-md-upper text-grey-dark">
            <div className="flex flex-col gap-3">
                <div>
                    <p>barbeariavargas@gmail.com</p>
                    <p>99980-0413</p>
                    <p>99822-4490</p>
                </div>
                <div className="flex gap-3">
                    <WhatsappButton />
                    <a
                        href="https://g.co/kgs/1vicjJ8"
                        target="_blank"
                        className="border-1 border-brown rounded-sm shadow p-2 w-fit"
                    >
                        <Image
                            src="/google-logo.png"
                            alt="Google Logo"
                            width={28}
                            height={28}
                        />
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p>Vargas Barbearia</p>
                <p>Feito com Google</p>
            </div>
        </footer>
    )
}