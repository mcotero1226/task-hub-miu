import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { CuentaType } from "./usegetcuenta";

const usePostCuenta = () => {
    const queryClient = useQueryClient();

    const datapost = async (data: CuentaType) => {
        const res = await fetch(`http://localhost:3001/cuenta`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:data.name,
                gmail:data.gmail,
                Password:data.password
            })
        });

        if (!res.ok) {
            throw new Error("Error al crear cuenta");
        }

        return res.json();
    };

    return useMutation({
        mutationFn: datapost,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cuenta"] });
        }
    });
};

export { usePostCuenta };