import { useQuery } from "@tanstack/react-query";

export type tasksTye = {
    id: number,
    text: string,
    completed: boolean


}

const useGetTasks = () => {
    const tasksGet = async (): Promise<tasksTye | undefined> => {
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