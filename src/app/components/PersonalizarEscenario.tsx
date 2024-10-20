import { useStore } from "@/store/store";
import { useEffect, useState } from "react";
import { CldImage, getCldImageUrl } from "next-cloudinary";


import perEscenario from "../css/personalizarEscenario.module.css";
import { special_elite } from "../fonts";


export default function PersonalizarEscenario() {
    const { escenario, isPersonalizarEscenario, togglePersonalizarEscenario, toggleAvatar, toggleGloboDialogo, setFase } = useStore();

    const [spinner, setSpinner] = useState(false);
    const [aReemplazar, setAReemplazar] = useState('');
    const [aInsertar, setAInsertar] = useState('');
    const [escenarioTransformadoUrl, setEscenarioTransformadoUrl] = useState("");

    const mostrarPerEscenariosClass = isPersonalizarEscenario ? `${perEscenario.personalizarContainer} ${perEscenario.personalizarActivo}` : `${perEscenario.personalizarContainer}`;
    
    useEffect(() => {
        if (escenario) {
            const escenarioElegidoUrl = getCldImageUrl({
                src: escenario,
                width: 2000,
                height: 1850,
            }, {
                cloud: {
                    cloudName: "karimbiscaiburo"
                }
            })
            setEscenarioTransformadoUrl(escenarioElegidoUrl);
        }
    }, [escenario])

    function transformar() {

        if (typeof escenario == "string" && aReemplazar !== "" && aInsertar !== "") {
            const img : HTMLImageElement | null = document.querySelector("#escenarioTransformado");

            const nuevoEscenario = getCldImageUrl({
                src: escenario,
                width: 1800,
                height: 1650,
                replace: [aReemplazar, aInsertar],
            }, {
                cloud: {
                    cloudName: "karimbiscaiburo"
                }
            })

            setEscenarioTransformadoUrl(nuevoEscenario)

            if(img) {
                img.style.opacity = ".3"
                img.src = nuevoEscenario
                setSpinner(true);

                img.onload = () => {
                    img.style.opacity = "1"
                    setSpinner(false);
                }
            }
        }
    }

    function elegirEscenario() {
        const mainContainer : HTMLElement | null = document.querySelector("#mainContainer");

        // Ocultar personalizar escenario
        togglePersonalizarEscenario();

        setTimeout(() => {
            if (mainContainer) {
                mainContainer.style.backgroundImage = `url('${escenarioTransformadoUrl}')`;
            }

            setFase(3)
            //Mostrar Avatar y dialogo
            toggleAvatar();
            toggleGloboDialogo();
        }, 300)
    }

    return (
        <article className={mostrarPerEscenariosClass}>
            <div className={perEscenario.imagesContainer}>
                <div className={perEscenario.editarContainer}>
                    <h2>Escenario Original</h2>
                    <CldImage 
                        width={400}
                        height={250}
                        sizes="100vw"
                        src={`${escenario}`}
                        alt="escenario de brujas"
                    />
                    <input 
                        type="text" 
                        placeholder="Item a Reemplazar" 
                        id="itemToReplace" 
                        className={special_elite.className}
                        onChange={(e) => setAReemplazar(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Item a Insertar" 
                        id="ItemToInsert" 
                        className={special_elite.className}
                        onChange={(e) => setAInsertar(e.target.value)}
                    />
                    
                    <button onClick={transformar} className={special_elite.className}>¡Transformar!</button>
                </div>
                {
                    escenario ? 
                    <div className={perEscenario.editadaContainer}>
                        <h2>Escenario Tranformado</h2>
                        <img src={escenarioTransformadoUrl} alt="Imagen del escenario" id="escenarioTransformado" height={250} width={400}/>
                        <button className={`${perEscenario.btnElegir} ${special_elite.className}`} onClick={elegirEscenario}>
                            {
                                spinner ? <span className={`${perEscenario.loader}`}></span> : "¡Elegir!"
                            }
                        </button>
                    </div>
                    : null
                }
                
            </div>
        </article>
    ) 
} 