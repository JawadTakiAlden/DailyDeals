import { avaliblePalettes } from "@/app/contsant";
import CustiomizationState from "@/app/interfaces/CustiomizationStateState";
import customizationObject from "@/app/types/CustomizationObject";
// import { getLocalStorageItem, setLocalStorageItem } from "@/app/utils/localstorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const activePaletteIndex : number =  2
const mode : 'light' | 'dark' = 'dark'

const initialState : CustiomizationState = {
    mode : mode,
    activePaletteIndex : activePaletteIndex,
    palette : avaliblePalettes[activePaletteIndex],
    protectEyes : true
}

const customization = createSlice({
    name : 'customization',
    initialState,
    reducers : {
        CHANGE_Palette : (state , action : PayloadAction<{
            palette : customizationObject,
            activePaletteIndex : number
        }>) => {
            state.palette = action.payload.palette
            state.activePaletteIndex = action.payload.activePaletteIndex
        },
        CHANGE_MODE : (state) => {
            const newMode = state.mode === 'light' ? 'dark' : 'light'
            state.mode = newMode
            // setLocalStorageItem<'light'|'dark'>('dailyDealsMode' , newMode)
        },
        TOGGLE_EYES_PROTECTION : (state) => {
            state.protectEyes != state.protectEyes
        }
    }
})


export default customization.reducer

export const {CHANGE_Palette , CHANGE_MODE} = customization.actions