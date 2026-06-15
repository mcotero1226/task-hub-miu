import { useQuery } from "@tanstack/react-query";

type UsersType={
    id:number;
    name:string;
    username:string;
    avatar:string;
    city:string
}

const useGetUsers = () => {
    const dataUsers = async ():Promise<UsersType[]> => {
        const fechUsers = await fetch("http://localhost:3001/users")
        if (!fechUsers.ok) {
            throw new Error("Error al crear cuenta");

        }
        return fechUsers.json()


    }
    const { data,isLoading,error} = useQuery({
        queryKey: ['users'],
        queryFn: dataUsers
    })
    return{data,isLoading,error}
}
export { useGetUsers }