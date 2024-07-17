"use client"

import { OutlinedInput, styled } from "@mui/material"

export default styled(OutlinedInput)(({theme}) => ({
    "& input[type=number]::-webkit-inner-spin-button" : {
        backgroundColor : theme.palette.primary.light,
        transtion : '0.3s',
        width : '20px',
        height : '20px',
        "&:hover" : {
            backgroundColor : theme.palette.primary.main,
        }
    }
}))