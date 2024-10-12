'use client'
import { creepster, special_elite } from "./fonts";

import style from "./page.module.css";
import avatar from "./css/avatar.module.css";
import dialogo from "./css/dialogo.module.css";

import Image from "next/image";

import avatarImg from "./img/avatarImg.png";
import { useState } from "react";

export default function Home() {
  const [mostrarAvatar, setMostrarAvatar] = useState(true);
  const [mostrarDialogo, setMostrarDialogo] = useState(true);
  const [textBtn, setTextBtn] = useState("¡Estoy listo!");

  const mostrarDialogoClass = mostrarDialogo ? `${dialogo.globoContainer} ${dialogo.globoContainerActivo}` : `${dialogo.globoContainer}`
  const mostrarAvatarClass = mostrarAvatar ? `${avatar.avatar} ${avatar.avatarActivo}` : `${avatar.avatar}`;

  function algo() {
    setMostrarAvatar(!mostrarAvatar)
    setMostrarDialogo(!mostrarDialogo)
  }

  return (
    <div className={`${special_elite.className} ${style.container} bg-fuchsia-950`}>

      <h1 className={`${creepster.className} ${style.title}`}>Hackaton Halloween SpoOoOoOoky</h1>

      <main className={`${style.mainContainer}`}>

          <div className={mostrarDialogoClass}>
            <div className={`${dialogo.globoTexto} ${special_elite.className}`}>

              <p className={special_elite.className}>¡La noche de Halloween está aquí y algo oscuro está sucediendo! En este mundo misterioso, las sombras y el silencio ocultan un desafío donde solo una persona puede estar en la cima. </p>
              <p className={special_elite.className}>¿Te atreves a entrar y vivir una experiencia escalofriante? Una vez que cruces el umbral, no habrá vuelta atrás. La oscuridad te está esperando… ¿Estás preparado para enfrentar lo que se oculta en las sombras?</p>

            </div>
            <button onClick={algo} className={`${dialogo.btnListo} ${special_elite.className}`}>{textBtn}</button>
          </div>

          <Image 
            src={avatarImg}
            alt="avatar"
            width={400}
            height={450}
            className={mostrarAvatarClass}
          />
      </main>
    
    </div>
  );
}

/*
<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
*/