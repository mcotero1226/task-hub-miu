import { BoxTitle } from "../components/box";
import { useNavigate } from "react-router-dom";
import {
    Layout,
    Card,
    Row,
    Col,
    Button,
    
} from "antd";

import { Content, Footer} from "antd/es/layout/layout";
import { Title } from "@mui/icons-material";
import Paragraph from "antd/es/skeleton/Paragraph";
import { Box } from "@mui/material";

const Home = () => {
    const navegate = useNavigate()
    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Content style={{ padding: "40px" }}>
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "50px",
                        }}
                        
                    >
                        <Button type="primary" size="large">
                            Empezar
                        </Button>
                    </div>

                    <Row gutter={[24, 24]}>
                        <Col xs={24} md={8}>
                            <Card title="Gestión de Tareas" hoverable onClick={()=>navegate("/tasks")}>
                                Administra tus tareas de forma rápida y sencilla.
                            </Card>
                        </Col>

                        <Col xs={24} md={8}>
                            <Card title="Estadísticas" hoverable onClick={()=>("/statistics")}>
                                Visualiza métricas y datos importantes.
                            </Card>
                        </Col>

                        <Col xs={24} md={8}>
                            <Card title="Usuarios" hoverable onClick={()=>("/users")}>
                                list friends
                            </Card>
                        </Col>
                    </Row>
                </Content>

                <Footer style={{ textAlign: "center" }}>
                    © 2026 Mi Aplicación - Ant Design
                </Footer>
            </Layout>

            <Button
                onClick={() => navegate('/tasks')}
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
        </>
        
    );
};

export { Home };