import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SuccessNotification({ message }) {
    const [open, setOpen] = useState(true);
    const vertical = 'top'
    const horizontal = 'right'

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Stack >
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleClose} severity="success"
                    sx={{
                        width: '100%',
                        marginTop: '30%'
                    }}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}