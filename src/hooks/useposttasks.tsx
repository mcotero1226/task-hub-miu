import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { tasksTye } from "./usegettasks";


const usePostTasks = () => {
    const queryClient = useQueryClient()
    const fechTasks = async (data: tasksTye) => {
        const dataTasks = await fetch('http://localhost:3001/task', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id:data.id,
                text: data.text,
                completed: data.completed
            })
        })
        if (!dataTasks.ok) {
            throw new Error("Error al crear cuenta");
        }

        return dataTasks.json();

    }
    return useMutation({
        mutationFn: fechTasks,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['task']
            })

        }
    })

}
export { usePostTasks }