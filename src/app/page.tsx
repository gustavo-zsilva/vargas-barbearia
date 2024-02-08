import { Header } from "../components/Header";
import { Location } from "../components/Location";
import { Outdoor } from "../components/Outdoor";
import { Menu } from "../components/Menu";
import { About } from "../components/About";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

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
        desktop:flex-row
        desktop:items-start
        desktop:mx-desktop
        desktop:text-base
        desktop:gap-16
      ">
        <div className="flex flex-col desktop:w-5/12 gap-10">
          <p className="text-lg text-center desktop:text-left">
            Cortes de cabelo & barba cinco estrelas, feitos há mais de 25 anos no mercado.
          </p>
          <Location />
          <Outdoor />
          <Menu />
          <About />
        </div>
        
        <div className="flex-1">
          <Gallery />
        </div>
      </div>

      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
