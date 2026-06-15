import { useMutation, useQueryClient } from "@tanstack/react-query";

type PatchTask = {
    id: number | string;
    text: string;
};

const usePaschInput = () => {
    const queryClient = useQueryClient();

    const fechPaschInput = async ({ id, text }: PatchTask) => {
        const res = await fetch(`http://localhost:3001/task/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text:text })
        });

        if (!res.ok) throw new Error("Error al actualizar tarea");
        return res.json();
    };

    const { mutate } = useMutation({
        mutationFn: fechPaschInput,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["task"] });
        }
    });

    return { mutate };
};

export { usePaschInput };