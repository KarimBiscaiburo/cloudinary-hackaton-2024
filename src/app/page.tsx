'use client'
import { creepster, special_elite } from "./fonts";

import style from "./page.module.css";

// Componentes
import GloboDialogo from "./components/GloboDialogo";
import AvatarImage from "./components/AvatarImage";
import Alerta from "./components/Alerta";
import CargarPersonaje from "./components/CargarPersonaje";
import Escenario from "./components/Escenario";
import PersonalizarEscenario from "./components/PersonalizarEscenario";
import Juego from "./components/Juego";
import Tablero from "./components/Tablero";

export default function Home() {

  return (
    <div className={`${special_elite.className} ${style.container}`}>
      <Alerta />

      <h1 className={`${creepster.className} ${style.title}`}>Hackathon Halloween Spooky PAPAAAA</h1>

      <main className={`${style.mainContainer}`} id="mainContainer">
        
        <GloboDialogo />

        <CargarPersonaje />

        <Escenario />

        <PersonalizarEscenario />

        <Juego />

        <Tablero />

        <AvatarImage />
        
      </main>
    </div>
  );
}
