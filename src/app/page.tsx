'use client'
import { creepster, special_elite } from "./fonts";

import style from "./page.module.css";

// Componentes
import GloboDialogo from "./components/GloboDialogo";
import AvatarImage from "./components/AvatarImage";
import Escenario from "./components/Escenario";
import PersonalizarEscenario from "./components/PersonalizarEscenario";
import Juego from "./components/Juego";
import Tablero from "./components/Tablero";

export default function Home() {

  return (
    <div className={`${special_elite.className} ${style.container}`}>

      <h1 className={`${creepster.className} ${style.title}`}>Hackathon Halloween Spooky PAPAAAA</h1>

      <main className={`${style.mainContainer}`} id="mainContainer">
        
        <GloboDialogo />

        <Escenario />

        <PersonalizarEscenario />

        <Juego />

        <Tablero />

        <AvatarImage />
        
      </main>

      <div className={style.avisoResponsive}>
        <p>Lo siento pero para que la experiencia, durante el juego, sea la misma para todos los participantes es necesario utilizar un tamaño de pantalla más grande</p>
      </div>
    </div>
  );
}
