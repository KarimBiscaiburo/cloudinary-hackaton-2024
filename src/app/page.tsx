'use client'
import { creepster, special_elite } from "./fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

import style from "./page.module.css";

// Componentes
import GloboDialogo from "./components/GloboDialogo";
import AvatarImage from "./components/AvatarImage";
import Escenario from "./components/Escenario";
import PersonalizarEscenario from "./components/PersonalizarEscenario";
import Juego from "./components/Juego";
import Tablero from "./components/Tablero";

import iconoSonido from "./img/sonido.png"
import iconoMute from "./img/mute.png"

export default function Home() {
  const [musicaIniciada, setMusicaIniciada] = useState(false);
  const [musicaAudio] = useState(new Audio("/audio/musicaHalloween.mp3"));
  const [isMuted, setIsMuted] = useState(false); 

  useEffect(() => {
    musicaAudio.volume = isMuted ? 0 : 0.1; 
    musicaAudio.loop = true;
  }, [isMuted, musicaAudio]);

  const handlerMusica = () => {
    if (!musicaIniciada) {
      musicaAudio.play().then(() => {
        console.log("Reproduciendo música");
        setMusicaIniciada(true);
      }).catch((e) => {
        console.log("Error", e);
      });
    } else {

      if (isMuted) {
        console.log("Desactivando");
        setIsMuted(false); 
      } else {
        console.log("Activando");
        setIsMuted(true); 
      }
    }
  };

  return (
    <div className={`${special_elite.className} ${style.container}`}>
      <button className={style.musica} onClick={() => handlerMusica()}>
        {
          isMuted ? <Image src={iconoMute} height={50} width={50} alt="icono sonido"/> 
                 : <Image src={iconoSonido} height={50} width={50} alt="icono sonido"/> 
        }
      </button>

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
