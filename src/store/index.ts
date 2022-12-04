import create from 'zustand'
import { MODIFIER_NORMAL } from '../worldDynamics/worldDynamics'


interface ControlsState {
    birthRate: number,
    deathRate: number,
    naturalResourceUsage: number,
    capitalInvestmentGeneration: number,
    polution: number,
    foodProduction: number,
    capitalInvestmentDiscard: number,
    setBirthRate: (br: number) => void,
    setDeathRate: (dr: number) => void,
    setNaturalResourceUsage: (nru: number) => void,
    setCapitalInvestmentGeneration: (cig: number) => void,
    setPolution: (p: number) => void,
    setFoodProduction: (fp: number) => void
    setCapitalInvestmentDiscard: (cid: number) => void,
    reset: () => void
}


export const useControlsStore = create<ControlsState>((set) => ({
    birthRate: MODIFIER_NORMAL.BRN1,
    deathRate: MODIFIER_NORMAL.DRN1,
    naturalResourceUsage: MODIFIER_NORMAL.NRUN1,
    capitalInvestmentGeneration: MODIFIER_NORMAL.CIGN1,
    polution: MODIFIER_NORMAL.POLN1,
    foodProduction: MODIFIER_NORMAL.FCN1,
    capitalInvestmentDiscard: MODIFIER_NORMAL.CIDN1,
    setBirthRate: (birthRate: number) => set(() => ({ birthRate })),
    setDeathRate: (deathRate: number) => set(() => ({ deathRate })),
    setNaturalResourceUsage: (naturalResourceUsage: number) => set(() => ({ naturalResourceUsage })),
    setCapitalInvestmentGeneration: (capitalInvestmentGeneration: number) => set(() => ({ capitalInvestmentGeneration })),
    setPolution: (polution: number) => set(() => ({ polution })),
    setFoodProduction: (foodProduction: number) => set(() => ({ foodProduction })),
    setCapitalInvestmentDiscard: (capitalInvestmentDiscard: number) => set(() => ({ capitalInvestmentDiscard })),
    reset: () => set(() => ({
        birthRate: MODIFIER_NORMAL.BRN1,
        deathRate: MODIFIER_NORMAL.DRN1,
        naturalResourceUsage: MODIFIER_NORMAL.NRUN1,
        capitalInvestmentGeneration: MODIFIER_NORMAL.CIGN1,
        polution: MODIFIER_NORMAL.POLN1,
        foodProduction: MODIFIER_NORMAL.FCN1,
        capitalInvestmentDiscard: MODIFIER_NORMAL.CIDN1,
    }))
}))