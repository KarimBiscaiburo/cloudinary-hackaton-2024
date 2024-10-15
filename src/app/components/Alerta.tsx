import { useStore } from "@/store/store";
import alerta from "../css/alerta.module.css";

export default function Alerta() {
    const { isAlertaActive } = useStore();

    const mostrarAlertaClass = isAlertaActive ? `${alerta.alertaContainer} ${alerta.alertaActiva}` : `${alerta.alertaContainer}`;
    return (
        <div className={mostrarAlertaClass}>
            <p>Imagen agregada con éxito!</p>
        </div>
    )
}