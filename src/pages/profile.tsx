import { AvatarFoto } from "../components/avatar";
import { CuentaPerfileGet } from "../hooks/usegetcuenta";
import { Box, Typography, Skeleton, Paper } from "@mui/material";

const Profile = () => {
    const { data, isError, isLoading } = CuentaPerfileGet();

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <Skeleton variant="rounded" width={300} height={200} />
            </Box>
        );
    }

    if (isError) {
        return (
            <Typography textAlign="center" mt={5}>
                Error al cargar perfil
            </Typography>
        );
    }

    const user = data?.[0];
    console.log(data)

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
        >
            <Paper
                elevation={4}
                sx={{
                    padding: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    width: 300,
                    bgcolor: 'black'
                }}
            >
                <Box mb={2}>
                    <AvatarFoto
                        open={() => { }}
                        photo={
                            "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/03/yuta-okkotsu-jujutsu-kaisen-0.jpg"
                        }
                    />
                </Box>

                <Typography variant="h6" color="white" fontWeight="bold">
                    {user?.name}
                </Typography>

                <Typography
                    variant="body2"
                    color="white"
                    mb={2}
                >
                    {user?.gmail}
                </Typography>

                <Typography
                    variant="caption"
                    variant="body2"
                    sx={{
                        backgroundColor:user?.estado ? 'white': "blue",
                        padding: "10px",
                        borderRadius: "12px",
                        
                        
                        

                    }}
                >
                    ✅{user?.estado}
                </Typography>
            </Paper>
        </Box>
    );
};

export { Profile };