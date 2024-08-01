import customizationObject from "../types/CustomizationObject"

export default interface CustiomizationState {
    palette : customizationObject

    activePaletteIndex : number

    mode : 'light' | 'dark'

    protectEyes : boolean
}