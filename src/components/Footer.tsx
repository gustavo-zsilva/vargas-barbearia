import { WhatsappButton } from "./WhatsappButton";

export function Footer() {
    return (
        <footer className="flex justify-between items-center px-desktop min-h-[20vh] bg-grey shadow-md-upper">
            <WhatsappButton />
            <span>Vargas Barbearia</span>
        </footer>
    )
}