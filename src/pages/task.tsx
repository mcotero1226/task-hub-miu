import { useGetTasks } from "../hooks/usegettasks";
import {
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
    Box
} from "@mui/material";
import type { tasksTye } from "../hooks/usegettasks";
import { ButtonC } from "../components/button";
import { useDeleteTasks } from "../hooks/usedelettasks";
import { useCompleteTask } from "../hooks/usepachtasks";
import { useState } from "react";
import { ModalTasks } from "../components/Modaltasks";
import { ButtonModal } from "../components/buttonmodal";

const Task = () => {
    const { tasks = [], isLoading, error } = useGetTasks();
    const { mutate } = useDeleteTasks();
    const { mutate: crossOut } = useCompleteTask();

    const [open, setOpen] = useState(false);
    const [dataTask, setDataTask] = useState("");

    const handleDelete = (id: number) => mutate(id);
    const crossOutTasks = (task: tasksTye) => crossOut(task);

    const dataTaskInput = tasks.filter(task =>
        task.text.toLowerCase().includes(dataTask.toLowerCase())
    );

    if (isLoading) return <Typography>Cargando...</Typography>;
    if (error) return <Typography>Error al cargar tareas</Typography>;

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #020617, #0f172a)",
                p: 4
            }}
        >
            {/* HEADER */}
            <Typography
                variant="h4"
                sx={{
                    color: "#e2e8f0",
                    fontWeight: 1000,
                    mb: 5
                }}
            >
                Task Manager 🚀
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Buscar tarea..."
                    value={dataTask}
                    onChange={(e) => setDataTask(e.target.value)}
                    sx={{
                        input: { color: "#fff" },
                        fieldset: { borderColor: "#334155" },
                        "& .MuiOutlinedInput-root:hover fieldset": {
                            borderColor: "#6366f1"
                        }
                    }}
                />

                <ButtonModal onClick={() => setOpen(true)} label="Nueva" />

                <ModalTasks
                    open={open}
                    onClose={() => setOpen(false)}
                    text="parent-modal-title"
                    title="Crear tarea"
                />
            </Box>

            {/* LIST */}
            <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {dataTaskInput.map((task: tasksTye) => (
                    <ListItem
                        key={task.id}
                        sx={{
                            borderRadius: 6,
                            background: "rgba(15,23,42,0.6)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2
                        }}
                    >
                        <ListItemText
                            primary={task.text}
                            secondary={
                                task.completed
                                    ? "Completada ✅"
                                    : "Pendiente ⏳"
                            }
                            primaryTypographyProps={{
                                sx: {
                                    textDecoration: task.completed
                                        ? "line-through"
                                        : "none",
                                    fontWeight: 600,
                                    color: task.completed
                                        ? "#64748b"
                                        : "#e2e8f0"
                                }
                            }}
                            secondaryTypographyProps={{
                                sx: {
                                    color: task.completed
                                        ? "#22c55e"
                                        : "#facc15"
                                }
                            }}
                        />

                        <Box sx={{ display: "flex", gap: 5   }}>
                            <ButtonC
                                text="Borrar"
                                type="button"
                                color="error"
                                variant="outlined"
                                onclick={() => handleDelete(task.id)}
                            />

                            <ButtonC
                                text={task.completed ? 'Destachar' : "Tachar"}
                                type="button"
                                color="primary"
                                variant="contained"
                                onclick={() => crossOutTasks(task)}
                            />
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export { Task };