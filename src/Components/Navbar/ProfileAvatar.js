import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { deepPurple } from '@mui/material/colors';


export default function ProfileAvatar({ name }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory()
  const firstLetter = name.charAt(0).toUpperCase()
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => history.push("/"))
      .catch((error) => {
        //to do
      });
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Твоят профил">
          <IconButton onClick={handleClick} size="small">
            <Avatar sx={{ width: 36, height: 36, padding: '3px', bgcolor: deepPurple[500] }}>{firstLetter}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 24,
              height: 24,
              ml: -0.5,
              mr: 2,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => history.push('/profile')}>
          <Avatar /> Профил
        </MenuItem>
        <Divider />
        <MenuItem onClick={signOutUser} sx={{color: 'red'}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Изход
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}