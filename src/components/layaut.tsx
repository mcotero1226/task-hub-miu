import { Outlet } from "react-router-dom";
import { PrimarySearchAppBar } from "../components/nav"


const Layaut = () => {
    return (
        <>
            <PrimarySearchAppBar />
            <Outlet />
        </>

    )
}
export { Layaut }