import { create } from "zustand";

interface IStore {
    faseEstado: number,
    isAvatarActive: boolean,
    isGloboDialogoActive: boolean,
    isSeleccionarEscenario: boolean,
    isEscenario: boolean,
    escenario: string | undefined,
    isPersonalizarEscenario: boolean,
    isComienzo: boolean
    isJugar: boolean,
    isBtnJugar: boolean,
    isTablero: boolean,
    intentos: {ronda: number, puntos: number}[],

    setFase: (fase: number) => void,
    toggleAvatar: () => void,
    toggleGloboDialogo: () => void,
    toggleSeleccionarEscenario: () => void,
    toggleEscenario: () => void,
    setEscenario: (escena: string) => void,
    togglePersonalizarEscenario: () => void,
    toggleComienzo: () => void,
    toggleJugar: () => void,
    toggleBtnJugar: () => void,
    toggleTablero : () => void,
    agregarIntento: (detalles: {ronda: number, puntos: number}) => void,
}

export const useStore = create<IStore>((set) => ({
    faseEstado: 0,
    isAvatarActive: true,
    isGloboDialogoActive: true,
    isSeleccionarEscenario: false,
    isEscenario: false,
    escenario: undefined,
    isPersonalizarEscenario: false,
    isComienzo: true,
    isJugar: false,
    isBtnJugar: false,
    isTablero: false,
    intentos: [],

    setFase: (fase: number) => set(() => ({ faseEstado: fase })),
    toggleAvatar: () => set((state) => ({ isAvatarActive: !state.isAvatarActive })),
    toggleGloboDialogo: () => set((state) => ({ isGloboDialogoActive: !state.isGloboDialogoActive })),
    toggleSeleccionarEscenario: () => set((state) => ({ isSeleccionarEscenario: !state.isSeleccionarEscenario })),
    toggleEscenario: () => set((state) => ({ isEscenario: !state.isEscenario})),
    setEscenario: (escena: string) => set(() => ({ escenario: escena })),
    togglePersonalizarEscenario: () => set((state) => ({ isPersonalizarEscenario: !state.isPersonalizarEscenario})),
    toggleComienzo: () => set((state) => ({ isComienzo: !state.isComienzo})),
    toggleJugar: () => set((state) => ({ isJugar: !state.isJugar})),
    toggleBtnJugar: () => set((state) => ({ isBtnJugar: !state.isBtnJugar})),
    toggleTablero: () => set((state) => ({ isTablero: !state.isTablero})),
    agregarIntento: (detalles: {ronda: number, puntos: number}) => set((state) => ({intentos: [...state.intentos, detalles]}))
}))