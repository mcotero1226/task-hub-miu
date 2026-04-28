import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { tasksTye } from "./usegettasks";

const useCompleteTask = () => {
    const queryClient = useQueryClient();

    const fetchCompleteTask = async (task:tasksTye) => {
        const res = await fetch(`http://localhost:3001/task/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed: !task.completed
            })
        });

        if (!res.ok) throw new Error("Error al actualizar tarea");

        return res.json();
    };

    const { mutate } = useMutation({
        mutationFn: fetchCompleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["task"] });
        }
    });

    return { mutate };
};

export { useCompleteTask };