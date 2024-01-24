import { Header } from "../components/Header";
import { Location } from "../components/Location";
import { Outdoor } from "../components/Outdoor";
import { Menu } from "../components/Menu";

export default function Home() {
  return (
    <main className="bg-grey h-screen">
      <Header />
      <div className="flex mx-44 mt-16 text-base">

        <div className="flex flex-col w-5/12 gap-10">
          <p className="flex text-lg">
            Cortes de cabelo & barba cinco estrelas, feitos há mais de 25 anos no mercado.
          </p>
          <Location />
          <Outdoor />
          <Menu />
        </div>
        
        <div className="flex flex-1">
          Content side 2
        </div>

      </div>
    </main>
  );
}
