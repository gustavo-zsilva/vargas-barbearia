import { Header } from "../components/Header";
import { Location } from "../components/Location";
import { Outdoor } from "../components/Outdoor";
import { Menu } from "../components/Menu";
import { About } from "../components/About";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { GallerySkeleton } from "../components/GallerySkeleton";

export default function Home() {
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
          <Outdoor />
          <Menu />
          <About />
        </div>
        
        <div className="flex-1">
          <Suspense fallback={<GallerySkeleton />}>
            <Gallery />
          </Suspense>
        </div>
      </div>

      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
