import { useStore } from "@/store/store";
import { CldImage } from "next-cloudinary";

import escenario from "../css/escenario.module.css";

interface IEscenarios {
    brujas: string,
    zombies: string,
    vampiros: string
}

const escenarios: IEscenarios = {
    "brujas": "escenario_brujas__4fbcca88-85c2-4213-8974-32d523130e6e_ibg8je",
    "zombies": "escenario_zombies_503d6c6c-1853-4051-b113-2e5eb2bde097_foewo6",
    "vampiros": "escenario_vampiros_179d9c0d-bb69-41bd-9971-7daccbf61e04_gket96"
  }

export default function Escenario() {
    const { isEscenario, setEscenario, toggleEscenario } = useStore()

    const mostrarEscenariosClass = isEscenario ? `${escenario.escenarioContainer} ${escenario.escenarioActivo}` : `${escenario.escenarioContainer}`

    function seleccionarEscenario(escena: string) {
      setEscenario(escena);
      // Ocultar seleccionar escenario
      toggleEscenario();

      setTimeout(() => {
        console.log(escena)
      }, 300)
    }

    return (
        <article className={mostrarEscenariosClass}>
          <div className={escenario.elementos}>
            <div className={escenario.item}>
              <h2>Brujas</h2>
              <CldImage 
                width={400}
                height={300}
                sizes="100vw"
                src={`${escenarios.brujas}`}
                alt="escenario de brujas"
                config={{
                  cloud: {
                    cloudName: "karimbiscaiburo"
                  }
                }}
              />
              <button onClick={() => seleccionarEscenario(escenarios.brujas)}>Seleccionar</button>
            </div>

            <div className={escenario.item}>
              <h2>Zombies</h2>
              <CldImage 
                width={400}
                height={300}
                sizes="100vw"
                src={`${escenarios.zombies}`}
                alt="escenario de zombies"
                config={{
                  cloud: {
                    cloudName: "karimbiscaiburo"
                  }
                }}
              />
              <button onClick={() => seleccionarEscenario(escenarios.zombies)}>Seleccionar</button>
            </div>
            
            <div className={escenario.item}>
              <h2>Vampiros y Lobos</h2>
              <CldImage 
                width={400}
                height={300}
                sizes="100vw"
                src={`${escenarios.vampiros}`}
                alt="escenario de vampiros"
                config={{
                  cloud: {
                    cloudName: "karimbiscaiburo"
                  }
                }}
              />
              <button onClick={() => seleccionarEscenario(escenarios.vampiros)}>Seleccionar</button>
            </div>

          </div>
        </article>
    )
}