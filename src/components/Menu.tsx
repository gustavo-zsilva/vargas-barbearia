import { BsScissors } from "react-icons/bs";
import { TiStarburst } from "react-icons/ti";

import { promises as fs } from 'fs'

type MenuItem = {
    name: string,
    price: number,
    isStarred: boolean,
    isPriceRanged: boolean,
}

export async function Menu() {
    const file = await fs.readFile(process.cwd() + '/menuItems.json', 'utf-8')
    const menuItems: MenuItem[] = JSON.parse(file)
    

    return (
        <div>
            <div className="flex items-center mb-6 gap-2">
                <h3 className="flex items-center gap-2 text-base bg-grey">
                    Pronto para pedir?
                    <BsScissors />
                </h3>
                <hr className="flex border-1 flex-1 rounded-full"/>
            </div>
            <ul className="border-l-2">
                {menuItems.map(item => (
                    <li key={item.name} className="flex justify-between items-center border-b-2 border-grey-dark mx-6 py-5">
                        <p>{item.name}</p>
                        <div className="flex gap-3 items-baseline relative">
                            {item.isPriceRanged && <span className="opacity-75">a partir de </span>}
                            <span className="text-lg font-semibold">{item.price} R$</span>
                            {
                                item.isStarred &&
                                    <TiStarburst style={{
                                        position: 'absolute',
                                        top:0,
                                        right: 0,
                                        transform: 'translateY(-70%) translateX(70%)',
                                    }}
                                    color="#F6B928"
                                    size={24}
                                />
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}