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

let comienzo = true;

// 10seg
const tiempoDeJuego: number = 10000;
// Tiempo que tarda en caer la golosina (segundos)
let tiempoGolosinaSeg = 5;
// Tiempo que tarda en desaparecer la golosina (milisegundos)
let tiempoGolosinaMil = 5000;

const golosinas: IGolosina[] = [
    {imagen: paloteRojo, puntos: 5}, 
    {imagen: paloteAzul, puntos: 5},
    {imagen: paloteRosa, puntos: 5},
    {imagen: mogulOjitos, puntos: 20},
    {imagen: mogulDientes, puntos: 10},
    {imagen: dulceDeLeche, puntos: 30}
]

export default function Juego() {
    const { isJugar, isBtnJugar, toggleBtnJugar } = useStore();

    const [ronda, setRonda] = useState(1);
    const [puntosTotales, setPuntosTotales] = useState(0);
    const [puntosObjetivo, setPuntosObjetivo] = useState(50);
    const [contadorPuntosObjetivo, setContadorPuntosObjetivo] = useState(0);

    const [siguienteRonda, setSiguienteRonda] = useState(false);

    const btnJuegoClass =  isBtnJugar ? `${juego.btnComenzar} ${juego.btnActivo}` : `${juego.btnComenzar}`;
    const juegoClass = isJugar ? `${juego.juegoContainer} ${juego.containerActivo}` : `${juego.juegoContainer}`;
    const siguienteRondaClass = siguienteRonda ? `${juego.siguienteRonda} ${juego.siguienteRondaActivo}` : `${juego.siguienteRonda}`

    // Usar useRef para almacenar el contador de puntos
    const contadorPuntosObjetivoRef = useRef(contadorPuntosObjetivo);
    const puntosObjetivosRef = useRef(puntosObjetivo);

    useEffect(() => {
        // Actualizar el ref cuando contadorPuntosObjetivo cambie
        contadorPuntosObjetivoRef.current = contadorPuntosObjetivo;
        puntosObjetivosRef.current = puntosObjetivo;
    }, [contadorPuntosObjetivo, puntosObjetivo]);

    function comenzarJuego() {

        // Cambiar el estado solo la primera vez
        if(comienzo) {
            // Desactivar boton
            toggleBtnJugar();
            comienzo = false;
        }      

        console.log(tiempoGolosinaSeg, tiempoGolosinaMil)

        // Intervalo donde van a ir cayendo las golosinas
        const intervaloJuego = setInterval(() => {  
            agregarGolosina();
        }, 500)

        setTimeout(() => {
            clearInterval(intervaloJuego); // Detiene el ciclo cuando termina la ronda
            
            // Pequeño retraso para esperar que terminen de caer todas las golosinas
            setTimeout(() => {
                setSiguienteRonda(false);
                // Verificar si completo con el objetivo de golosinas recolectadas
                if (contadorPuntosObjetivoRef.current >= puntosObjetivosRef.current) {
                    // Pasa a la siguiente ronda
                    avanzarRonda();
                    // Ejecuta nuevamente el juego
                    comenzarJuego();
                } else {
                    console.log("juego terminado")
                }
            }, tiempoGolosinaMil)
        }, tiempoDeJuego);
    }

    function avanzarRonda() {
        // Siguiente ronda
        setRonda(prev => prev + 1);
        // Tiempo de caida mas rápido
        tiempoGolosinaMil -= 500;
        tiempoGolosinaSeg -= .5;

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
            golosina.draggable = false;

            golosina.addEventListener("click", () => sumarPuntos(golosinas[posImgGolosina].puntos, golosina))

            pantallaJuego.appendChild(golosina)

            setTimeout(() => {
                if(golosina) golosina.remove();
            }, tiempoGolosinaMil)
        }
    }

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
            <button className={btnJuegoClass} onClick={comenzarJuego}>¡Comenzar!</button>
            <p className={siguienteRondaClass}>¡Siguiente Ronda!</p>
        </article>
    )
}