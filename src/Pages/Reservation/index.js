import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import ReservationForma from './ReservationForm'
import { getDatabase, ref, onValue } from "firebase/database";
import { schema } from '../../Shared/Validations/booking'
import addMassageDataToUser from '../../Firebase/addMassageDataToUser'
import reserveMassage from '../../Firebase/reserveMassage'
import setAllHours from '../../Firebase/setAllHours'
import ErrorNotification from '../../Shared/Components/ErrorNotification'
import SuccessNotification from '../../Shared/Components/SuccessNotification'
import styles from './Reservation.module.css'
import { AuthContext } from '../../Shared/Contexts/ContextWrapper';

const ReservationPage = () => {
    const [schedule, setSchedule] = useState([])
    const [allMassages, setAllMassages] = useState([])
    const [date, setDate] = useState('')
    const [isDateChoosen, setIsDateChoosen] = useState(false)
    const [alert, setAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [disableBtn, setDisableBtn] = useState(false)
    const contextData = useContext(AuthContext)
    const history = useHistory()

    useEffect(() => {
        const db = getDatabase();
        onValue(ref(db, 'allMassages'), (snapshot) => {
            setAllMassages(snapshot.val())
        })

        let arr = [], i, j;
        for (i = 10; i <= 18; i++) {
            for (j = 0; j < 2; j++) {
                if (i === 18) { arr.push("18:00"); break; }
                arr.push(i + ":" + (j === 0 ? "00" : "30"))
            }
        }
        setSchedule(arr)
    }, [])

    const handleDate = (pickedDate) => {
        const date = ('0' + pickedDate.getDate()).slice(-2) + '-'
            + ('0' + (pickedDate.getMonth() + 1)).slice(-2) + '-'
            + pickedDate.getFullYear()

        setDate('')
        setIsDateChoosen(false)
        setAllHours(date, schedule)
            .then(() => {
                setDate(date)
                setIsDateChoosen(true)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setAlert(false)

        const data = new FormData(event.currentTarget);
        const name = data.get('name')
        const phone = data.get('phone')
        const massage = data.get('massage')
        const date = data.get('date')
        const hour = data.get('hour')
        const formData = {
            name: name,
            phone: phone,
            massage: massage,
            date: date,
            hour: hour
        }

        schema.validate(formData)
            .then(() => reserveMassage(date, hour, name, phone, massage))
            .then(() => {
                if (contextData.auth) {
                    addMassageDataToUser(massage, date, hour, name)
                }
            })
            .then(() => {
                setIsSuccess(true)
                setSuccessMessage(`Вие запазихте час за ${date} от ${hour} часа! Очакваме Ви!`)
                setDisableBtn(true)
                setTimeout(() => {
                    if (contextData.auth) { history.push('/profile') }
                    else { history.push('/') }
                }, 5000)
            })
            .catch(error => {
                setAlert(true)
                setErrorMessage(error.message)
            })
    }

    return (
        <div className={styles.page}>
                <div className={styles.formContainer}>
                    <ReservationForma
                        handleSubmit={handleSubmit}
                        handleDate={handleDate}
                        allMassages={allMassages}
                        isAuth={contextData.auth}
                        isDateChoosen={isDateChoosen}
                        date={date}
                        disableBtn={disableBtn} />
                </div>
                {
                    alert
                        ? <ErrorNotification message={errorMessage} />
                        : null
                }
                {
                    isSuccess
                        ? <SuccessNotification message={successMessage} />
                        : null
                }
        </div>
    )
}

export default ReservationPage
