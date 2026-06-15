import { useQueryClient, useMutation } from "@tanstack/react-query";

const useDeleteTasks = () => {
    const queryClient = useQueryClient()

    const fechDeleteTasks = async (id: number | string) => {
        const dataTasks = await fetch(`http://localhost:3001/task/${id}`, {
            method: 'DELETE',
        })
        if (!dataTasks.ok) {
            throw new Error("Error al crear cuenta");
        }
        return dataTasks.json()
    }
    const { mutate } = useMutation({
        mutationFn: fechDeleteTasks,
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['task']
        })

    })
    return { mutate }
}
export { useDeleteTasks }