import { create } from "zustand";

interface IStore {
    faseEstado: number,
    isAvatarActive: boolean,
    isAlertaActive: boolean,
    isGloboDialogoActive: boolean,
    isCargarPersonaje: boolean,
    isSeleccionarEscenario: boolean,
    isEscenario: boolean,

    setFase: (fase: number) => void,
    toggleAvatar: () => void,
    toggleAlerta: () => void,
    toggleGloboDialogo: () => void,
    toggleCargarPersonaje: () => void,
    toggleSeleccionarEscenario: () => void,
    toggleEscenario: () => void

}

export const useStore = create<IStore>((set) => ({
    faseEstado: 0,
    isAvatarActive: true,
    isAlertaActive: false,
    isGloboDialogoActive: true,
    isCargarPersonaje: false,
    isSeleccionarEscenario: false,
    isEscenario: false,

    setFase: (fase: number) => set(() => ({ faseEstado: fase })),
    toggleAvatar: () => set((state) => ({ isAvatarActive: !state.isAvatarActive })),
    toggleAlerta: () => set((state) => ({ isAlertaActive: !state.isAlertaActive })),
    toggleGloboDialogo: () => set((state) => ({ isGloboDialogoActive: !state.isGloboDialogoActive })),
    toggleCargarPersonaje: () => set((state) => ({ isCargarPersonaje: !state.isCargarPersonaje })),
    toggleSeleccionarEscenario: () => set((state) => ({ isSeleccionarEscenario: !state.isSeleccionarEscenario })),
    toggleEscenario: () => set((state) => ({ isEscenario: !state.isEscenario})),

}))