export function GallerySkeleton() {
    return (
        <div>
            <div className="h-2-screen overflow-hidden relative w-screen sm-desktop:w-full max-w-[850px]">
                <main className="mb-6 h-[480px] bg-grey-dark animate-pulse rounded-sm" />
                <div className="
                    grid
                    min-[450px]:grid-cols-2
                    gap-6
                ">
                    {Array.from({ length: 6 }, (value, index) => index).map(id => (
                        <picture key={id} className="w-full h-[300px] bg-grey-dark animate-pulse inline-block rounded-sm overflow-hidden" />
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