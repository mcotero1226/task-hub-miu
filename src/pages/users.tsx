import * as React from 'react';
import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Button,
    Box,
    Paper
} from '@mui/material';
import { useGetUsers } from '../hooks/usegetusers';

export default function UsersList() {
    const { data, isLoading, error } = useGetUsers();

    if (isLoading) return <Typography align="center">Cargando...</Typography>;
    if (error) return <Typography align="center">Error al cargar usuarios</Typography>;

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #020617, #0f172a, #1e293b)',

            }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: 400,
                    borderRadius: 4,
                    padding: 2,
                    backgroundColor: '#121212'
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        mb: 2,
                        textAlign: 'center'
                    }}
                >
                    Personas sugeridas
                </Typography>

                <List>
                    {data?.map((user, index) => (
                        <React.Fragment key={user.id}>
                            <ListItem
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: 2,
                                    px: 1,
                                    py: 1,
                                    transition: '0.3s',
                                    '&:hover': {
                                        backgroundColor: '#1e1e1e'
                                    }
                                }}
                            >
                                {/* INFO USUARIO */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <ListItemAvatar>
                                        <Avatar
                                            src={user.avatar}
                                            alt={user.name}
                                            sx={{ width: 50, height: 50 }}
                                        />
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={
                                            <Typography
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 600
                                                }}
                                            >
                                                {user.name}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography
                                                sx={{
                                                    color: '#aaa',
                                                    fontSize: '0.8rem'
                                                }}
                                            >
                                                @{user.username} • {user.city}
                                            </Typography>
                                        }
                                    />
                                </Box>

                                {/* BOTÓN */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: 5,
                                        background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    Seguir
                                </Button>
                            </ListItem>

                            {index < data.length - 1 && (
                                <Divider
                                    sx={{ borderColor: '#2a2a2a', my: 1 }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}