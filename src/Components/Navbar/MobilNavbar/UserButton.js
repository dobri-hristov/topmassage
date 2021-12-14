import React, { Fragment, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const UserButton = () => {
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);

    const handleHome = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <Fragment>
            <IconButton
                edge="start"
                aria-label="home"
                onClick={handleHome}
                sx={{ width: 30, height: 30, marginLeft: '0' }}
            >
                <HomeIcon />
            </IconButton>
            <Menu
                anchorEl={anchor}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                open={open}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 10,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
            >
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/sign-in"
                >
                    <Typography variant="h6"> Вход </Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/sign-up"
                >
                    <Typography variant="h6"> Регистрация </Typography>
                </MenuItem>
            </Menu>
        </Fragment>
    )
}

export default UserButton
