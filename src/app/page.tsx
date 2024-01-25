import { Header } from "../components/Header";
import { Location } from "../components/Location";
import { Outdoor } from "../components/Outdoor";
import { Menu } from "../components/Menu";
import { Gallery } from "../components/Gallery";

export default function Home() {
  return (
    <main className="bg-grey h-full">
      <Header />
      <div className="flex mx-44 py-16 text-base gap-16">
        <div className="flex flex-col w-5/12 gap-10">
          <p className="flex text-lg">
            Cortes de cabelo & barba cinco estrelas, feitos há mais de 25 anos no mercado.
          </p>
          <Location />
          <Outdoor />
          <Menu />
        </div>
        
        <div className="flex flex-1">
          <Gallery />
        </div>
      </div>
    </main>
  );
}
