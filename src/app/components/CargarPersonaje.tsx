import { useStore } from "@/store/store";
// import { useState } from "react";
import { CldUploadWidget, /*CloudinaryUploadWidgetInfo */ } from "next-cloudinary";

import cargarPersonaje from "../css/cargarPersonaje.module.css";

export default function CargarPersonaje() {
    const { isCargarPersonaje, toggleAlerta, toggleAvatar, toggleCargarPersonaje, toggleGloboDialogo, toggleSeleccionarEscenario, setFase } = useStore();

    // const [resource, setResource] = useState<string | CloudinaryUploadWidgetInfo | undefined>(undefined);

    const mostrarCargarPersonajeClass = isCargarPersonaje ? `${cargarPersonaje.cargarPersonajeContainer} ${cargarPersonaje.cargarPersonajeContainerActivo}` : `${cargarPersonaje.cargarPersonajeContainer}`;

    function finCargarPersonaje() {
        // Mostrar alerta
        toggleAlerta();
    
        setTimeout(() => {
          // Mostrar avatar
          toggleAvatar();
          // Mostrar globo dialogo
          toggleGloboDialogo();
          // Mostrar seleccionar escenario
          toggleSeleccionarEscenario();

          // Ocultar cargar personaje
          toggleCargarPersonaje();
          // Ocultar alerta
          toggleAlerta();

          // Siguiente fase
          setFase(2);
        }, 2000)
      }

    return (
        <article className={mostrarCargarPersonajeClass}>
          <div className={cargarPersonaje.inputContainer}>
            
            <CldUploadWidget 
              options={{
                sources: ["local"],
                language: "es",
                text: {
                  es: {
                    or: "O",
                    menu: {
                      files: "Subir esde tu dispositivo",
                    },
                    local: {
                      browse: "Seleccionar",
                      dd_title_single: "Arrastra tu imagen aquí",
                      dd_title_multi: "Arrastra tu imagen aquí",
                    }
                  }
                }
              }}
              onSuccess={(/*result*/) => {
                // setResource(result?.info);  // { public_id, secure_url, etc }
                finCargarPersonaje();
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
              uploadPreset="karim-cloudinary-hackaton-2024">
              {({ open }) => {
                  return (
                    <button className={cargarPersonaje.inputCargarPersonaje} onClick={() => open()}>
                      Cargar Imagen
                    </button>
                  );
              }}
            </CldUploadWidget>
            <button onClick={finCargarPersonaje}>seguir</button>

          </div>
        </article>
    )
}