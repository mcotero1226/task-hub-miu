import { Button } from "@mui/material"


const ButtonModal = ({ onClick, label }) => {
    return (
            < Button onClick={onClick} variant="outlined" color="error"  > {label}</Button >
    )
}
export { ButtonModal }