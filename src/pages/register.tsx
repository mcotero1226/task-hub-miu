import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useForm, Controller } from "react-hook-form";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { usePostCuenta } from '../hooks/usepostcuenta';
import { ButtonC } from '../components/button';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';

const Register = () => {
    const { control, handleSubmit, reset } = useForm();
    const { mutate } = usePostCuenta()

    const onSubmit = (data: any) => {
        mutate(data)
        console.log(data);
        reset();
        localStorage.setItem('register', JSON.stringify(data))

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
            >

                <h2 className="text-2xl font-black text-center mb-6">
                    Crear cuenta
                </h2>

                <Box className="flex flex-col gap-4">

                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Nombre"
                                variant="standard"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle color='error' />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />

                    <Controller
                    
                        name="gmail"
                        control={control}
                        defaultValue=""
                        
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Correo"
                                variant="standard"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AttachEmailIcon color='error'/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="password"
                                label="Contraseña"
                                variant="standard"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <VisibilityIcon color='error'/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />


                    <ButtonC
                        variant={"contained"}
                        type={'submit'}
                        text={'Registrarse'}
                        color={'error'}
                        endIcon={<CancelScheduleSendIcon/>}
                    />

                </Box>
            </form>
        </div>
    );
}

export { Register };