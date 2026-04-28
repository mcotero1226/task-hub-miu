import { Box, Typography, Button, Container } from "@mui/material";
import { BoxTitle } from "../components/box";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navegate = useNavigate()
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    py: 10,
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        mb: 2,
                        fontWeight: "bold",
                    }}
                >
                    Welcome to your app
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        color: "text.secondary",
                    }}
                >
                    Here you can manage your tasks easily and quickly.
                </Typography>

                <Button
                    onClick={()=>navegate('/tasks')}
                    variant="contained"
                    size="large"
                    sx={{
                        px: 4,
                        borderRadius: 2,
                        boxshadow: "0px 8px 20px rgba(0,0,0,0.2)",
                    }}
                >
                    Go
                </Button>

                <Box sx={{ mt: 8 }}>
                    <BoxTitle

                        titleOne="Organize your tasks"
                        titleTwo="Boost your productivity 🚀"
                    />
                </Box>
            </Box>
        </Container >
    );
};

export { Home };