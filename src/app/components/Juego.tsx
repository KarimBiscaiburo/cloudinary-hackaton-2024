import { useStore } from "@/store/store";
import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";

import juego from "../css/juego.module.css";

import sopaTenebrosa from "../img/sopa-tenebrosa.png";
import diana from "../img/diana.png";

import paloteRojo from "../img/palote_rojo.png";
import paloteAzul from "../img/palote_azul.png";
import paloteRosa from "../img/palote_rosa.png";
import mogulOjitos from "../img/mogul_ojitos.png";
import mogulDientes from "../img/mogul_dientes.png";
import dulceDeLeche from "../img/dulce_de_leche.png"

interface IGolosina {
    imagen: StaticImageData,
    puntos: number
}

// 10seg
const tiempoDeJuego: number = 10000;

const golosinas: IGolosina[] = [
    {imagen: paloteRojo, puntos: 5}, 
    {imagen: paloteAzul, puntos: 5},
    {imagen: paloteRosa, puntos: 5},
    {imagen: mogulOjitos, puntos: 20},
    {imagen: mogulDientes, puntos: 10},
    {imagen: dulceDeLeche, puntos: 30}
]

export default function Juego() {
    const { isJugar } = useStore();

    const [ronda, setRonda] = useState(1);
    const [puntosTotales, setPuntosTotales] = useState(0);
    const [puntosObjetivo, setPuntosObjetivo] = useState(50);
    const [contadorPuntosObjetivo, setContadorPuntosObjetivo] = useState(0);
    const [tiempoGolosinaSeg, setTiempoGolosinaSeg] = useState(10);
    const [tiempoGolosinaMil, setTiempoGolosinaMil] = useState(10000);

    // Variable para determinar si todavía no perdio
    // let isGanando : boolean = true;
    // Variable para activar o desactivar cada ronda
    // let juegoActivo : boolean = true;

    // Usar useRef para almacenar el contador de puntos
    const contadorPuntosObjetivoRef = useRef(contadorPuntosObjetivo);
    const puntosObjetivosRef = useRef(puntosObjetivo);

    useEffect(() => {
        // Actualizar el ref cuando contadorPuntosObjetivo cambie
        contadorPuntosObjetivoRef.current = contadorPuntosObjetivo;
        puntosObjetivosRef.current = puntosObjetivo;
    }, [contadorPuntosObjetivo, puntosObjetivo]);

    function prueba() {
        console.log("empezando")

        // Intervalo donde van a ir cayendo las golosinas
        const intervaloJuego = setInterval(() => {  
            agregarGolosina();
        }, 500)

        setTimeout(() => {
            clearInterval(intervaloJuego); // Detiene el ciclo cuando termina la ronda

            console.log(contadorPuntosObjetivoRef.current >= puntosObjetivosRef.current)
            console.log(contadorPuntosObjetivoRef.current, puntosObjetivosRef.current)
            // Verificar si completo con el objetivo de golosinas recolectadas
            if (contadorPuntosObjetivoRef.current >= puntosObjetivosRef.current) {
                // Pasa a la siguiente ronda
                avanzarRonda();
                // Ejecuta nuevamente el juego
                prueba();
            } else {
                console.log("juego terminado")
            }

        }, tiempoDeJuego);
    }

    function avanzarRonda() {
        // Siguiente ronda
        setRonda(prev => prev + 1);
        // Tiempo de caida mas rápido
        setTiempoGolosinaSeg(prev => prev - .5);
        setTiempoGolosinaMil(prev => prev - 500);

        // Aumentar el objetivo de puntos
        setPuntosObjetivo(prev => prev + 50);
        // Devolver a 0 el contador de puntos para el objetivo
        setContadorPuntosObjetivo(0);
    }

    function sumarPuntos(puntos: number, golosina: HTMLElement) {
        setPuntosTotales(prev => prev + puntos);
        setContadorPuntosObjetivo(prev => prev + puntos);
        golosina.remove();
    }

    function agregarGolosina() {
        const pantallaJuego: HTMLElement | null  = document.querySelector("#contenedorJuego");

        if (pantallaJuego) {
            const anchoPantalla = pantallaJuego.offsetWidth;
            const posicionGolosina = Math.floor((Math.random() * anchoPantalla) - 30);

            const posImgGolosina = Math.floor(Math.random() * 6)

            const golosina = document.createElement("div");
            golosina.className = juego.golosina;
            golosina.style.backgroundImage = `url(${golosinas[posImgGolosina].imagen.src})`;
            golosina.style.left = `${posicionGolosina}px`;
            golosina.style.animationDuration = `${tiempoGolosinaSeg}s`;

            golosina.addEventListener("click", () => sumarPuntos(golosinas[posImgGolosina].puntos, golosina))

            pantallaJuego.appendChild(golosina)

            setTimeout(() => {
                if(golosina) golosina.remove();
            }, tiempoGolosinaMil)
        }
    }

    const juegoClass = isJugar ? `${juego.juegoContainer} ${juego.containerActivo}` : `${juego.juegoContainer}`;

    return (
        <article className={juegoClass} id="contenedorJuego">
            <div className={juego.estadisticasContainer}>
                <div className={juego.puntajesContainer}>
                    <div className={juego.puntajeObjetivo}>
                        <Image 
                            src={diana}
                            height={45}
                            width={45}
                            alt="Mogul sopa tenebrosa gomitas"
                        />
                        <p>{contadorPuntosObjetivo} / {puntosObjetivo}</p>
                    </div>
                    <div className={juego.puntajeTotal}>
                        <Image 
                            src={sopaTenebrosa}
                            height={45}
                            width={55}
                            alt="Mogul sopa tenebrosa gomitas"
                        />
                        <p>{puntosTotales}</p>
                    </div>
                </div>
                <div className={juego.rondaContainer}>
                    <p>Ronda: {ronda}</p>
                </div>
            </div>
            <button className={juego.comenzar} onClick={prueba}>¡Comenzar!</button>
        </article>
    )
}