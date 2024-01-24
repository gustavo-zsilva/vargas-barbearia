export function Outdoor() {
    return (
        <div className="w-full text-grey shadow-sm">
            <div className="flex flex-col bg-green items-center py-3">
                <span className="font-bold">ABERTO AGORA</span>
                <span>até 20:00</span>
            </div>
            <button className="bg-green-dark w-full rounded-b-lg py-2.5 border-t-2 border-green-darker">
                <a href="">
                    Agendar horário
                </a>
            </button>
        </div>
    )
}