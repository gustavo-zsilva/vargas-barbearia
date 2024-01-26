import { MdOutlineStar } from "react-icons/md"
import { BiSolidQuoteLeft } from "react-icons/bi"

export function UserComment() {
    return (
        <div className="flex flex-col bg-yellow-light p-7 gap-6">
            <header className="flex justify-between items-center gap-8">
                <div className="flex">
                    <MdOutlineStar size={26} color="#FFF" />
                    <MdOutlineStar size={26} color="#FFF" />
                    <MdOutlineStar size={26} color="#FFF" />
                    <MdOutlineStar size={26} color="#FFF" />
                    <MdOutlineStar size={26} color="#FFF" />
                </div>
                <span className="font-medium">
                    Jean C.
                </span>
            </header>
            <main className="flex">
                <BiSolidQuoteLeft size={26} color="#FFF" className="min-w-fit" />
                <p className="ml-2">
                    Sou cliente fiel desta barbearia há um tempo e posso dizer que adoro o trabalho do Vargas. O atendimento sempre é excelente. Sem dúvidas, recomendo.
                </p>
            </main>
        </div>
    )
}