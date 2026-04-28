import { useGetTasks } from "../hooks/usegettasks";
import {
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import type { tasksTye } from "../hooks/usegettasks";
import { ButtonC } from "../components/button";
import { useDeleteTasks } from "../hooks/usedelettasks";
import { useCompleteTask } from "../hooks/usepachtasks"
import { useState } from "react";
import { ModalTasks } from "../components/Modaltasks";
import { ButtonModal } from "../components/buttonmodal";




const Task = () => {
    const { tasks = [], isLoading, error } = useGetTasks();
    const { mutate } = useDeleteTasks()
    const { mutate: crossOut } = useCompleteTask()
    const [open, setOpen] = useState(false);
    const [dataTask, setDataTask] = useState('')

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };




    if (isLoading) return <Typography>Cargando...</Typography>;
    if (error) return <Typography>Error al cargar tareas</Typography>;

    const handleDelete = (id: number) => {
        mutate(id);
    };
    const crossOutTasks = (tasks: tasksTye) => {
        crossOut(tasks)

    }

    const dataTaskInput = tasks.filter(task =>
        task.text.toLowerCase().includes(dataTask.toLowerCase())
    );


    return (
        <>
            <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <TextField id="filled-basic" variant="filled" placeholder="Buscar" value={dataTask} onChange={(e) => setDataTask(e.target.value)} />

                <ButtonModal
                    onClick={handleOpen}
                    label='Dor'

                />
                <ModalTasks
                    open={open}
                    onClose={handleClose}
                    text="parent-modal-title"
                    title="Task modal"


                />
            </div>
            <List>
                {dataTaskInput.map((task: tasksTye) => (
                    <ListItem
                        key={task.id}
                        sx={{
                            mb: 1,
                            borderRadius: 2,
                            boxShadow: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 6
                        }}
                    >


                        <ListItemText
                            primary={task.text}
                            secondary={task.completed ? "Completada ✅" : "(Pendiente) ⏳"}
                            primaryTypographyProps={{
                                sx: {
                                    textDecoration: task.completed ? "line-through" : "none color-red",
                                    fontWeight: 500,
                                    color: task.completed ? 'red' : 'black',

                                },
                            }}
                        />
                        <ButtonC
                            text="Borrar"
                            type="submit"
                            color="error"
                            variant="outlined"
                            onclick={() => handleDelete(task.id)}
                        />
                        <ButtonC
                            text="Tachar"
                            type="submit"
                            color="primary"
                            variant="outlined"
                            onclick={() => crossOutTasks(task)}
                        />

                    </ListItem>
                ))}
            </List>
        </>
    );
};

export { Task };