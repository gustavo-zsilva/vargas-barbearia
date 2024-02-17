import Image from 'next/image'
// import { promises as fs } from 'fs'
import { fetchWrapper } from '../utils/fetch'

type Photo = {
    photo_reference: string,
}

type PhotosData = {
    photos: Photo[],
}

const baseUrl = process.env.GOOGLE_BASE_URL
const apiKey = process.env.GOOGLE_API_KEY

async function getPhotoUrl(photo_reference: string) {
    const data = await fetch(`${baseUrl}/place/photo?maxwidth=450&photo_reference=${photo_reference}&key=${apiKey}`)
    return data.url
}

export async function Gallery() {

    // Fetch static images
    // const file = await fs.readFile(process.cwd() + '/imageLinks.json', 'utf-8')
    // const imageLinks: string[] = JSON.parse(file)

    const { result } = await fetchWrapper<{ result: PhotosData }>('/place/details', {
        fields: ['photos'],
    })
    
    const photoUrls = await Promise.all(result.photos.map(({ photo_reference }) => getPhotoUrl(photo_reference)))

    return (
        <div>
            <div className="h-2-screen overflow-hidden relative max-w-[850px]">
                <main className="mb-6 rounded-sm overflow-hidden relative w-full">
                    <Image
                        src="/banner.jpg"
                        alt="Vargas Barbearia Banner"
                        width={850}
                        height={250}
                        // 850 - 480
                        priority
                    />
                </main>
                <div className="
                    min-[450px]:columns-2
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
                    {photoUrls.map(link => (
                        <picture key={link} className="inline-block mb-6 rounded-sm overflow-hidden">
                            <Image
                                src={link}
                                alt="Foto da barbearia"
                                width={450}
                                height={300}
                            />
                        </picture>
                    ))}
                </div>
            </div>
            <button className="mt-6 border-2 border-brown w-full rounded-sm bg-grey hover:brightness-95 ease-linear duration-75">
                <a
                    href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWpsMTE5cXZr&src=2&slp=UhUIARIREg8iDS9nLzExamwxMTlxdms#ts=4"
                    target="_blank"
                    className="flex py-4 justify-center"
                >
                    Ver tudo
                </a>
            </button>
        </div>
    )
}