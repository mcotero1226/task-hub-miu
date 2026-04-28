import { Modal, Box, Button, TextField, MenuItem } from "@mui/material";
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
    id:number
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
    const {mutate}=usePostTasks()

    const onSubmit = (data: FormData) => {
        mutate(data)
        console.log(data);
        reset();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby={text}
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 500 }}>
                <h2 id="child-modal-title" className="text-center font-black text-3xl">{title}</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="text"
                        fullWidth
                        margin="normal"
                        {...register("text", { required: "el input es requerido" })}
                        error={!!formState.errors.text}
                        helperText={formState.errors.text?.message}

                    />
                      <TextField
                        label="Id"
                        fullWidth
                        margin="normal"
                        {...register("id", { required: "el input es requerido" })}
                        error={!!formState.errors.id}
                        helperText={formState.errors.id?.message}
                        type="number"

                    />


                    <TextField
                        label="Estado"
                        select
                        fullWidth
                        margin="normal"
                        defaultValue="false"
                        {...register("completed")}
                    >
                        <MenuItem value={true}>True</MenuItem>
                        <MenuItem value={false}>False</MenuItem>
                    </TextField>

                    <Button type="submit" variant="contained" >
                        Guardar
                    </Button>
                </form>

                <Button onClick={onClose}>Close Child Modal</Button>
            </Box>
        </Modal>
    )
}

export { ModalTasks }