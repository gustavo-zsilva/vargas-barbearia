import { BsScissors } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";

export function Menu() {
    return (
        <div>
            <div className="flex items-center mb-6 gap-2">
                <h3 className="flex items-center gap-2 text-base bg-grey">
                    Pronto para pedir?
                    <BsScissors />
                </h3>
                <hr className="flex border-1 flex-1 rounded-full"/>
            </div>
            <ul className="border-x-2">
                <li className="flex justify-between items-center border-b-2 border-grey-dark mx-6 py-5">
                    <p>Aparo de barba</p>
                    <div className="flex gap-3 items-baseline relative">
                        <span className="opacity-75">a partir de </span>
                        <span className="text-lg font-semibold">20 R$</span>
                        <TiStarburst style={{
                                position: 'absolute',
                                top:0,
                                right: 0,
                                transform: 'translateY(-70%) translateX(70%)',
                            }}
                            color="#F6B928"
                            size={24}
                        />
                    </div>
                </li>
            </ul>
        </div>
    )
}