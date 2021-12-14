import React, { useState, Fragment } from 'react';
import LoginForm from "./LoginForm";
import { schema } from '../../Shared/Validations/loginValidation'
import ErrorNotification from '../../Shared/Components/ErrorNotification'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [alert, setAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    setAlert(false)
    setErrorMessage('')
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    const formData = {
      email: email,
      password: password
    }

    schema.validate(formData)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .catch(() => {
            setAlert(true)
            setErrorMessage('Не същестува потребител с този email и/или парола')
          });
      })
      .catch(error => {
        setAlert(true)
        setErrorMessage(error.message)
      })
  }

  return (
    <Fragment>
      <LoginForm handleSubmit={handleSubmit} />
      {
        alert
          ? <ErrorNotification message={errorMessage} />
          : null
      }
    </Fragment>
  );
}

export default LoginPage
