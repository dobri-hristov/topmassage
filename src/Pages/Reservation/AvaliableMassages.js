import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AvaliableMassages = ({ allMassages, isAuth}) => {
    const [massage, setMassage] = useState('');

    const handleMassage = (event) => {
        setMassage(event.target.value)
    }

    return (
        <FormControl variant="standard" fullWidth>
            <InputLabel>Вид масаж</InputLabel>
            <Select
                value={massage}
                name="massage"
                onChange={handleMassage}
                fullWidth
                id="reservationMassage"
            >
                {
                    allMassages.map((massage) => (
                        Object.keys(massage.prices).map((minutes, index) => {
                            const price = Number(massage.prices[minutes])
                            const discountPrice = price - ((price / 100) * 20)

                            if (isAuth) {
                                return <MenuItem key={index} value={`${massage.massageName}-${minutes}мин.-${discountPrice}лв.`}>
                                    {`${massage.massageName} - ${minutes} мин./`}
                                    <span style={{ "color": "red" }}>{discountPrice} лв.</span>
                                </MenuItem>
                            }

                            return <MenuItem key={index} value={`${massage.massageName}-${minutes}мин.-${price}лв.`}>
                                {`${massage.massageName} - ${minutes} мин. - ${price} лв.`}
                            </MenuItem>
                        })
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default AvaliableMassages
