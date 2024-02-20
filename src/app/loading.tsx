import { Header } from "../components/Header";
import { Location } from "../components/Location";
import { About } from "../components/About";
import { OutdoorSkeleton } from "../lib/skeletons/OutdoorSkeleton";

import { GallerySkeleton } from "../lib/skeletons/GallerySkeleton";
import { MenuSkeleton } from "../lib/skeletons/MenuSkeleton";

export default function Loading() {
    return (
        <main className="bg-grey text-brown h-full">
            <Header />
            <div className="
                flex
                flex-col
                items-center
                mx-mobile
                py-16
                sm-desktop:flex-row
                sm-desktop:items-start
                sm-desktop:gap-16
                sm-desktop:text-base
                sm-desktop:mx-sm-desktop
                desktop:mx-desktop
            ">
                <div className="flex flex-col gap-10 sm-desktop:w-5/12">
                    <p className="text-lg text-center desktop:text-left">
                        Cortes de cabelo & barba cinco estrelas, feitos há mais de 25 anos no mercado.
                    </p>
                    <Location />
                    <OutdoorSkeleton />
                    <MenuSkeleton />
                    <About />
                </div>

                <div className="flex-1">
                    <GallerySkeleton />
                </div>
            </div>
        </main>
    )
}