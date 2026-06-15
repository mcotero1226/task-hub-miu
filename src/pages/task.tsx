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
import { useEffect, useState } from "react";
import { ModalTasks } from "../components/Modaltasks";
import { ButtonModal } from "../components/buttonmodal";
import { usePaschInput } from "../hooks/usepachtasksinput";
import { useForm } from "react-hook-form";
import type { TaskFormData } from "../components/Modaltasks";

import { usePostTasks } from "../hooks/useposttasks";



const Task = () => {
    const { reset} = useForm<TaskFormData>();
    const { tasks = [], isLoading, error } = useGetTasks();
    const { mutate } = useDeleteTasks();
    const { mutate: crossOut } = useCompleteTask();
    const { mutate: mutatePach } = usePaschInput()
    const { mutate: mutatePostTasks } = usePostTasks()


    const [open, setOpen] = useState(false);
    const [openPachInput, setOpenPachInput] = useState(false);
    const [dataTask, setDataTask] = useState("");

    const onSubmit = (data: tasksTye) => {
        mutatePostTasks({
            id: data.id,
            text: data.text,
            completed: data?.completed === "true"
        })
        console.log(data);
        reset();
    };
        

    const modificaciontasks = (task: tasksTye) => {
        setOpenPachInput(true)
        mutatePach({
            id: task.id,
            text: task.text
        });

    };
    
    useEffect(()=>{
        console.log("holaa")
    },[tasks])

    const seekerTasks=tasks.filter(tasks=>tasks.text.toLowerCase().includes(dataTask.toLowerCase()))

    const handleDelete = (id: number | string) => mutate(id);
    const crossOutTasks = (task: tasksTye) => crossOut(task);




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
                    buttonFrom={onSubmit}
                />
                <ModalTasks
                    open={openPachInput}
                    onClose={() => setOpenPachInput(false)}
                    text="parent-modal-title"
                    title="Modificar"
                    buttonFrom={modificaciontasks}

                />
            </Box>


            <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

                {seekerTasks.map((task: tasksTye) => {
                    const taskText = typeof task.text === "object" && task.text !== null
                        ? task.text.text
                        : String(task.text ?? "");

                    const completed = task.completed === true || task.completed === "true";

                    return (
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
                                primary={taskText}
                                secondary={
                                    completed
                                        ? "Completada ✅"
                                        : "Pendiente ⏳"
                                }
                                primaryTypographyProps={{
                                    sx: {
                                        textDecoration: completed
                                            ? "line-through"
                                            : "none",
                                        fontWeight: 600,
                                        color: completed
                                            ? "#64748b"
                                            : "#e2e8f0"
                                    }
                                }}
                                secondaryTypographyProps={{
                                    sx: {
                                        color: completed
                                            ? "#22c55e"
                                            : "#facc15"
                                    }
                                }}
                            />

                            <Box sx={{ display: "flex", gap: 5 }}>
                                <ButtonC
                                    text="Borrar"
                                    type="button"
                                    color="error"
                                    variant="outlined"
                                    onclick={() => handleDelete(task.id)}
                                />

                                <ButtonC
                                    text={completed ? 'Destachar' : "Tachar"}
                                    type="button"
                                    color="primary"
                                    variant="contained"
                                    onclick={() => crossOutTasks(task)}
                                />

                                <ButtonC
                                    text={'Editar'}
                                    type="button"
                                    color="primary"
                                    variant="contained"
                                    onclick={() => modificaciontasks(task)}
                                />
                            </Box>
                        </ListItem>
                    )
                })}


            </List>
        </Box>
    );
};

export { Task };