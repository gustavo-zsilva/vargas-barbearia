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
import Error from './error'
import { ErrorBoundary } from 'react-error-boundary'

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
          <ErrorBoundary fallbackRender={Error}>
            <Outdoor />
          </ErrorBoundary>
          <ErrorBoundary fallbackRender={Error}>
            <Menu />
          </ErrorBoundary>
          <About />
        </div>
        
        <div className="flex-1">
          <ErrorBoundary FallbackComponent={Error}>
            <Suspense fallback={<GallerySkeleton />}>
              <Gallery />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>

      <ErrorBoundary
        // @ts-ignore
        fallback={<Error className="rounded-none py-10" />}
      >
        <Testimonials />
      </ErrorBoundary>
      <ErrorBoundary
        // @ts-ignore
        fallback={<Error className="rounded-none my-6" />}
      >
        <Contact />
      </ErrorBoundary>
      <Footer />
    </main>
  );
}
