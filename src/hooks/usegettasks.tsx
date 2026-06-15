import { useQuery } from "@tanstack/react-query";

export type tasksTye = {
    id: number | string,
    text: string 
    completed?: boolean | string
}

const useGetTasks = () => {
    const tasksGet = async (): Promise<tasksTye[]> => {
        const tasksData = await fetch('http://localhost:3001/task')
        if (!tasksData.ok) {
            throw new Error("Error al crear cuenta");

        }
        return tasksData.json()


    }
    const { data, isLoading, error } = useQuery({
        queryKey: ['task'],
        queryFn: tasksGet,

    })


    return { tasks: data || [], isLoading, error }
}
export { useGetTasks }