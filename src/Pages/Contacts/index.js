import React from 'react'
import MyMap from './Map'
import styles from './Contacts.module.css'

const ContactsPage = () => {
    const days = ['Понеделник', 'Вториник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя']

    return (
        <div>
            <div className={styles.container}>
                <p className={styles.title}><b>Контакти</b></p>
                <p>За информация и резервации ни потърсете!</p>
                <div><i className={`fas fa-map-pin ${styles.place}`}></i>град София, ж.к. Люлин, бул. "Царица Йоана" 49</div>
                <div><i className={`fas fa-phone-alt ${styles.phone}`}></i>+359 878 456 333</div>
                <div><i className={`fas fa-envelope ${styles.email}`}></i>topmassage@gmail.com</div>
                <div className={styles.worktimeMap}>
                    <div className={styles.worktime}>
                        <p><b>Работно Време</b></p>
                        <ul className={styles.hours}>
                            {days.map(day => (
                                day === 'Неделя' ? <li key={day}><i className="fas fa-clock"></i>{day}: <span>почивен ден</span></li>
                                    : <li key={day}><i className="fas fa-clock"></i>{day}: <span>10:00-19:00</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.map}>
                        <MyMap />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage
