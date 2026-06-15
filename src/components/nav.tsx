import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonC } from './button';
import { AvatarFoto } from './avatar';




const PrimarySearchAppBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const [navigationMenu, setNavigationMenu] = useState<null | HTMLElement>(null);
    const navegate = useNavigate()

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isNavMenuOpen = Boolean(navigationMenu);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);

    };

    const handleMenuCloseProfile = () => {
        setAnchorEl(null);
        navegate('profile')
    };


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleNavitionMenu = (event: React.MouseEvent<HTMLElement>) => {
        setNavigationMenu(event.currentTarget);
    };

    const handleNavMenuClose = () => {
        setNavigationMenu(null);
        navegate('tasks')
    };

    const next = () => {
        localStorage.removeItem('register')
        navegate('/')
    }


    const handleNavMenuCloseinicio = () => {
        setNavigationMenu(null);
        navegate('/')
    };

    const handleNavMenuClosestatistics = () => {
        setNavigationMenu(null);
        navegate('/statistics')
    };

    const handleUsersList = () => {
        setNavigationMenu(null);
        navegate('/users')
    };
    
    const renderNavMenu = (
        <Menu
            anchorEl={navigationMenu}
            open={isNavMenuOpen}
            onClose={handleNavMenuClose}
            PaperProps={{
                sx: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    color: 'white'
                }
            }}
        >
            <MenuItem onClick={handleNavMenuClose}>Tasks</MenuItem>
            <MenuItem onClick={handleNavMenuCloseinicio}>Start</MenuItem>
            <MenuItem onClick={handleNavMenuClosestatistics}>Statistics</MenuItem>
            <MenuItem onClick={handleUsersList}>UsersList</MenuItem>


        </Menu>
    );

    const renderMenu = (
        <Menu
            PaperProps={{
                sx: {
                    backgroundColor: 'black',
                    color: 'white',
                    textAlign: 'center',
                }
            }}
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuCloseProfile}
        >
            <MenuItem onClick={handleMenuCloseProfile}>Profile</MenuItem>
        </Menu >
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={4}>
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>

            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={11}>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton size="large" color="inherit">
                </IconButton>


                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box >
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar >

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={handleNavitionMenu}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>





                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={11} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AvatarFoto
                                open={handleProfileMenuOpen}
                                color="inherit"
                                photo={'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/03/yuta-okkotsu-jujutsu-kaisen-0.jpg'}
                            ></AvatarFoto>
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    </Box>
                    <ButtonC
                        variant={"contained"}
                        type={'submit'}
                        text={'Next'}
                        color={'error'}
                        onclick={next}
                    />


                </Toolbar>
            </AppBar>

            {renderNavMenu}
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export { PrimarySearchAppBar };