import React, { Fragment, useState } from 'react';
import RegisterForm from "./RegisterForm";
import registerUser from '../../Firebase/registerUser'
import { schema } from '../../Shared/Validations/registerValidation'
import ErrorNotification from '../../Shared/Components/ErrorNotification'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterPage = () => {
    const [alert, setAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        setAlert(false)
        setErrorMessage('')
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const name = data.get('name');
        const lastName = data.get('lastName');
        const phone = data.get('phone');
        const formData = {
            email: email,
            password: password,
            name: name,
            lastName: lastName,
            phone: phone
        }

        schema.validate(formData)
            .then(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(() => registerUser(name, lastName, phone, email))
                    .then(() => updateProfile(auth.currentUser, { displayName: name }))
                    .catch(() => {
                        setAlert(true)
                        setErrorMessage('Вече същестува потребител с този email !')
                    });
            })
            .catch(error => {
                setAlert(true)
                setErrorMessage(error.message)
            })
    }

    return (
        <Fragment>
            <RegisterForm handleSubmit={handleSubmit} />
            {
                alert
                    ? <ErrorNotification message={errorMessage} />
                    : null
            }
        </Fragment>
    );
}

export default RegisterPage
