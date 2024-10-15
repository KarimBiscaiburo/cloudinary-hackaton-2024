'use client'

import { creepster, special_elite } from "./fonts";

import style from "./page.module.css";

// Componentes
import GloboDialogo from "./components/GloboDialogo";
import AvatarImage from "./components/AvatarImage";
import Alerta from "./components/Alerta";
import CargarPersonaje from "./components/CargarPersonaje";
import Escenario from "./components/Escenario";

export default function Home() {

  return (
    <div className={`${special_elite.className} ${style.container}`}>
      <Alerta />

      <h1 className={`${creepster.className} ${style.title}`}>Hackathon Halloween SpoOoOoOoky</h1>

      <main className={`${style.mainContainer}`}>
        
        <GloboDialogo />

        <CargarPersonaje />

        <Escenario />

        <AvatarImage />
        
      </main>
    </div>
  );
}
