import { Avatar} from "@mui/material"

type AvatarType={
    open:()=>void,
    photo?:string
}


const AvatarFoto = ({open,photo}:AvatarType) => {
    return (
            <Avatar src={photo || undefined} onclick={open}/>

    )


}
export { AvatarFoto }