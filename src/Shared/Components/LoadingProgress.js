import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingProgress = () => {
    return (
        <div style={{ textAlign: 'center'}}>
            <CircularProgress size='8rem' />
        </div>
    )
}

export default LoadingProgress
