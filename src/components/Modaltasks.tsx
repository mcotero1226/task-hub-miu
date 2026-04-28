import { Modal, Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { usePostTasks } from "../hooks/useposttasks";

type ModalType = {
    open: boolean,
    onClose: Function;
    text: string;
    handleClose: Function;
    title: string;
}

type FormData = {
    id: number
    text: string;
    completed: string;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const ModalTasks = ({ open, handleClose, text, onClose, title }: ModalType) => {

    const { register, handleSubmit, reset, formState } = useForm<FormData>();
    const { mutate } = usePostTasks()

    const onSubmit = (data: FormData) => {
        mutate(data)
        console.log(data);
        reset();
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={text}
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    ...style,
                    width: 500,
                    background: "linear-gradient(1deg, #020617, #0f172a)",
                    transform: "translate(-50%, -50%)",
                    borderRadius: 4,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                    backdropFilter: "blur(12px)",
                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            fontWeight: 800,
                            color: "#e2e8f0",
                            mb: 3
                        }}
                    >
                        {title}
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="text"
                            fullWidth
                            margin="normal"
                            {...register("text", { required: "el input es requerido" })}
                            error={!!formState.errors.text}
                            helperText={formState.errors.text?.message}
                            InputProps={{
                                style: { color: "white" }
                            }}
                            InputLabelProps={{
                                style: { color: "#94a3b8" }
                            }}


                        />
                        <TextField
                            label="Id"
                            fullWidth
                            margin="normal"
                            {...register("id", { required: "el input es requerido" })}
                            error={!!formState.errors.id}
                            helperText={formState.errors.id?.message}
                            type="number"
                            InputProps={{
                                style: { color: "white" }
                            }}
                            InputLabelProps={{
                                style: { color: "#94a3b8" }
                            }}

                        />


                        <TextField
                            label="Estado"
                            select
                            fullWidth
                            margin="normal"
                            defaultValue="false"
                            {...register("completed")}
                            InputProps={{
                                style: { color: "white" }
                            }}
                            InputLabelProps={{
                                style: { color: "#94a3b8" }
                            }}
                        >
                            <MenuItem value={true}>True</MenuItem>
                            <MenuItem value={false}>False</MenuItem>
                        </TextField>
                        <div className="gap-5">
                            <Button type="submit" variant="contained" sx={{}}>
                                Guardar
                            </Button>
                            <Button onClick={onClose}>Close Child Modal</Button>
                        </div>
                    </form>
                </Box>
            </Modal >
        </>
    )
}

export { ModalTasks }