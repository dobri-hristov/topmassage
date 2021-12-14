import React, { Fragment, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const MenuButton = () => {
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);

    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <Fragment>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ width: 30, height: 30, marginLeft: '0' }}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchor}
                onClose={handleClose}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
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
                            left: 12,
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
                    to="/"
                >
                    <Typography variant="h6"> Начало </Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/massages"
                >
                    <Typography variant="h6"> Масажи </Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/prices"
                >
                    <Typography variant="h6"> Цени </Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/contact"
                >
                    <Typography variant="h6"> Контакти </Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/reservation"
                >
                    <Typography variant="h6"> Запази час </Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/about"
                >
                    <Typography variant="h6"> За нас </Typography>
                </MenuItem>
            </Menu>
        </Fragment>
    )
}

export default MenuButton
