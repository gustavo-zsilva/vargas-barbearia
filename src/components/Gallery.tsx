import Image from 'next/image'
import { promises as fs } from 'fs'

export async function Gallery() {

    const file = await fs.readFile(process.cwd() + '/imageLinks.json', 'utf-8')
    const imageLinks: string[] = JSON.parse(file)

    return (
        <div>
            <div className="h-2-screen overflow-hidden relative">
                <main className="mb-6 rounded-sm overflow-hidden">
                    <Image
                        src="https://lh3.googleusercontent.com/p/AF1QipMknrFqHTkaaaUh6Dp-Qz08Ds2ftLnvPd2Df4yH=w1080-h608-p-no-v0"
                        alt="Main Image"
                        width={850}
                        height={480}
                    />
                </main>
                <div className="
                    columns-2
                    gap-6
                    before:absolute
                    before:bottom-0
                    before:content-['']
                    before:w-full
                    before:h-8
                    before:bg-gradient-to-t
                    before:from-grey
                    before:to-transparent
                ">
                    {imageLinks.map(link => (
                        <picture className="inline-block mb-6 rounded-sm overflow-hidden">
                            <Image
                                src={link}
                                alt="Img"
                                width={450}
                                height={300}
                            />
                        </picture>
                    ))}
                </div>
            </div>
            <button className="mt-6 border-2 border-brown w-full py-4 rounded-sm bg-grey hover:brightness-95 ease-linear duration-75">
                <a href="#">
                    Ver tudo
                </a>
            </button>
        </div>
    )
}