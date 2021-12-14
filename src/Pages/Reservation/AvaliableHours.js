import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AvaliableHours = ({ isDateChoosen, date }) => {
    const [avaliableHours, setAvaliableHours] = useState([])
    const [isHoursSet, setIsHoursSet] = useState(false)
    const [message, setMessage] = useState('Първо изберете дата')
    const [hour, setHour] = useState('')
    const [labelMessage, setLabelMessage] = useState('Изберете час')
    const db = getFirestore()

    useEffect(() => {
        if (isDateChoosen) {
            setHour('')
            let arr = []
            async function readToDoc() {
                const hours = collection(db, `${date}`)
                await getDocs(hours)
                    .then((res) => {
                        res.docs.map(doc => doc.data().isAvaliable === true ? arr.push(doc.id) : null)
                        setAvaliableHours(arr)
                        setIsHoursSet(true)
                        setMessage(`Cвободни часове за ${date}`)
                    })
            }
            readToDoc()
        }
    }, [date, db, isDateChoosen, isHoursSet])

    const handleHour = (event) => {
        setHour(event.target.value)
        setLabelMessage('Избран час')
    }

    return (
        <Grid item xs={12} sm={6}>
            < FormControl fullWidth margin="normal" >
                <InputLabel>{labelMessage}</InputLabel>
                <Select
                    value={hour}
                    name="hour"
                    label={labelMessage}
                    onChange={handleHour}
                    id="reservationHour"
                >
                    {
                        isHoursSet && avaliableHours.length === 0
                            ? <MenuItem disabled>Няма свободни часове за тази дата</MenuItem>
                            : <MenuItem disabled>{message}</MenuItem>
                    }
                    {
                        isHoursSet && avaliableHours.length !== 0
                            ? avaliableHours.map(hour => (<MenuItem key={hour} value={hour}>{hour}</MenuItem>))
                            : null
                    }
                </Select>
            </FormControl >
        </Grid >
    )
}

export default AvaliableHours
