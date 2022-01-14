import React, { useState } from 'react'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Grid from '@mui/material/Grid';
import subDays from "date-fns/subDays"
import TextField from '@mui/material/TextField';

const AvaliableDate = ({ handleDate }) => {
    const [date, setDate] = useState('Изберете дата')
    const [labelMessage, setLabelMessage] = useState('Изберете дата')

    const handleChange = (value) => {
        setDate(value)
        if (!isNaN(value)) {
            handleDate(value)
        }
        setLabelMessage('Избрана дата')
    };

    const sundayHandler = (date) => {
        return date.getDay() === 0
    };

    return (
        <Grid item xs={12} sm={6}>
            <DesktopDatePicker
                inputFormat="dd-MM-yyyy"
                mask="__-__-____"
                value={date}
                onChange={handleChange}
                shouldDisableDate={sundayHandler}
                minDate={subDays(new Date(), -2)}
                maxDate={subDays(new Date(), -33)}
                renderInput={(params) => <TextField {...params}
                    error={false}
                    name='date'
                    fullWidth
                    margin="normal"
                    label={labelMessage}
                />}
            />
        </Grid>
    )
}

export default AvaliableDate
