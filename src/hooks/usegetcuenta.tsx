import { useQuery } from "@tanstack/react-query";

export type CuentaType = {
    name: string | never;
    gmail: string;
    password:string
};
const CuentaPerfileGet = () => {

    const fechDataCuesta = async (): Promise<CuentaType[] | undefined> => {

        const dataCuenta = await fetch('http://localhost:3001/cuenta');

        if (!dataCuenta.ok) throw new Error("error");

        return dataCuenta.json();
    };
     const { data, isLoading, isError } = useQuery({
        queryKey: ['cuenta'],
        queryFn: fechDataCuesta
    });

    return { data,isLoading,isError };
};

export { CuentaPerfileGet };