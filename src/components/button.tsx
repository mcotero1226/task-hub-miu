import { Button } from "@mui/material"
import type React from "react"

type ButtonType = {
    text: string,
    variant: "text" | "contained" | "outlined",
    type?: "button" | "submit" | "reset",
    endIcon?:React.ReactNode,
    color:'error'|'primary',
    onclick?:()=> void,
}

const ButtonC = ({ text, type,variant,endIcon,color,onclick }: ButtonType) => {
    return <Button type={type} variant={variant} endIcon={endIcon} color={color} onClick={onclick}>{text}</Button>
}

export { ButtonC }