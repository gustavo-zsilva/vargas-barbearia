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
      <div className="flex mx-desktop py-16 text-base gap-16">
        <div className="flex flex-col w-5/12 gap-10">
          <p className="text-lg">
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
