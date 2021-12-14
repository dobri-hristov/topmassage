import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Grid from '@mui/material/Grid';
import bg from "date-fns/locale/bg"
import AvaliableHours from './AvaliableHours.js'
import AvaliableMassages from './AvaliableMassages.js'
import AvaliableDate from './AvaliableDate.js'
const theme = createTheme();

const ReservationForm = ({ handleSubmit, handleDate, allMassages,isAuth, isDateChoosen, date, disableBtn }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Typography component="h1" variant="h5">
                        Запазване на час
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            label="Име и Фамилия"
                            name="name"
                            variant="standard"
                        />
                        <TextField
                            required
                            fullWidth
                            margin="normal"
                            label="Телефонен номер"
                            name="phone"
                            variant="standard"
                        />
                        <AvaliableMassages allMassages={allMassages} isAuth={isAuth}/>
                        <LocalizationProvider locale={bg} dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <Grid container spacing={2}>
                                    <AvaliableDate handleDate={handleDate} />
                                    <AvaliableHours isDateChoosen={isDateChoosen} date={date} />
                                </Grid>
                            </Stack>
                        </LocalizationProvider>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={disableBtn}
                            sx={{ mt: 3, mb: 2 }}>
                            Запази час
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ReservationForm
