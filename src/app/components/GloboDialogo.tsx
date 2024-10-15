import { useStore } from "@/store/store";
import dialogo from "../css/dialogo.module.css";
import { special_elite } from "../fonts";

const dialogos : Array<string>[] = [
    [
        "¡La noche de Halloween está aquí y algo oscuro está sucediendo! En este mundo misterioso, las sombras y el silencio ocultan un desafío donde solo una persona puede estar en la cima.",
        "¿Te atreves a entrar y vivir una experiencia escalofriante? Una vez que cruces el umbral, no habrá vuelta atrás. La oscuridad te está esperando… ¿Estás preparado para enfrentar lo que se oculta en las sombras?"
    ], [
        "Primero vas a tener que crear tu personaje, así que elíje la foto que mas te guste para representarlo. Puede ser un perro, delfin, avión, ZOMBIE o lo que tú quieras!!!!",
        "Solo procura que se distinga el personaje del fondo. Esto para que luego se lo quitemos y lo ubiquemos donde corresponde... EL ESCENARIO QUE VOS ELIJAS!!!"
    ], [
    "Perfecto, ahora elije un escenario y personalízalo de la manera que mas te guste. Puedes reemplazar lo que quieras!"
    ]
]

const textoBoton : string[] = [
    "¡Estoy listo!",
    "¡Entendido!",
    "¡Estupendo!"
]

export default function GloboDialogo() {
  const { isGloboDialogoActive, faseEstado, toggleAvatar, setFase, toggleGloboDialogo, toggleCargarPersonaje } = useStore();
    
  const mostrarDialogoClass = isGloboDialogoActive ? `${dialogo.globoContainer} ${dialogo.globoContainerActivo}` : `${dialogo.globoContainer}`

  const funciones = [dialogoAgregarPersonaje, agregarPersonaje];

  function dialogoAgregarPersonaje() {
    // Ocultar dialogo
    toggleGloboDialogo();

    setTimeout(() => {
      // Mostrar dialogo
      toggleGloboDialogo();
      setFase(1);
    }, 300)
  }

  function agregarPersonaje() {
    // Ocultar avatar y dialogo
    toggleAvatar();
    toggleGloboDialogo();

    // Delay para que se vaya el avatar primero
    setTimeout(() => {
      // Mostrar cargar personaje
      toggleCargarPersonaje();
    }, 300)
  }

  return (
      <div className={mostrarDialogoClass}>
        <div className={`${dialogo.globoTexto} ${special_elite.className}`}>
          {
            dialogos[faseEstado].map((frase, index) => {
              return <p key={index} className={special_elite.className}>{frase}</p>
            })
          }
        </div>
        {
          <button 
            onClick={() => funciones[faseEstado]()} 
            className={`${dialogo.btnListo} ${special_elite.className}`}
          >
            {textoBoton[faseEstado]}
          </button>
        }
      </div>
  )
}