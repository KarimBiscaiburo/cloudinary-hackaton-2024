import { useStore } from "@/store/store";

import tablero from "../css/tablero.module.css";

export default function Ranking() {
    const { isTablero, intentos, toggleTablero, toggleBtnJugar, toggleJugar, toggleEscenario, toggleComienzo } = useStore();

    const tableroClass = isTablero ? `${tablero.tableroContainer} ${tablero.tableroActivo}` : `${tablero.tableroContainer}`

    function volerJugar() {
        // Ocultar ranking
        toggleTablero();

        setTimeout(() => {
            // Mostrar escenario de juego y activar btn de comenzar
            toggleJugar();
            toggleBtnJugar();
            toggleComienzo();
        }, 300);
    }

    function volverInicio() {
        // Ocultar ranking
        toggleTablero();

        setTimeout(() => {
            // Mostrar escenarios
            toggleEscenario();
            toggleComienzo();
        }, 300);
    }

    return (
        <article className={tableroClass}>
            <div className={tablero.container}>
                <div className={tablero.tablero}>
                    {
                        intentos.map((intento, index) => (
                            <div key={index} className={tablero.intentoContainer}>
                                <p><span>Intento Nro:</span> {index + 1}</p>
                                <p><span>Puntos:</span> {intento.puntos}</p>
                                <p><span>Rondas:</span> {intento.ronda}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={tablero.botones}>
                    <button onClick={volerJugar}>Volver a jugar</button>
                    <button onClick={volverInicio}>Cambiar de escenario</button>
                </div>
            </div>
        </article>
    )
}