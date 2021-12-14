import React from 'react'
import styles from './Error.module.css'
import ErrorButton from './Button'

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.icon}>
                <i class="far fa-frown"></i>
            </p>
            <h2 className={styles.line}>Страницата не е намерена</h2>
            <p className={styles.line}>Изглежда не можем да намерим това, което търсите. Може би една от тези връзки ще ви помогне.</p>
            <div className={styles.line}>
                <ErrorButton title='Начало' path='/' />
                <ErrorButton title='Масажи' path='/massages' />
                <ErrorButton title='Цени' path='/prices' />
                <ErrorButton title='Контакти' path='/contact' />
                <ErrorButton title='Запази час' path='/reservation' />
                <ErrorButton title='За нас' path='/about' />
                <ErrorButton title='Вход' path='/sign-in' />
                <ErrorButton title='Регистрация' path='/sign-up' />
            </div>
        </div>
    )
}

export default ErrorPage
