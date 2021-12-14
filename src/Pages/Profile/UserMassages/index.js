import React from 'react'
import styles from './UserMassages.module.css'
import sortDate from './functions/sortDate'
import filterDate from './functions/filterDate'

const UserMassages = ({ massages }) => {
    if (massages.length !== 0) {
        massages = massages.filter(massage => filterDate(massage.date))
    }

    return (
        <div className="massages-form">
            <h3 className={styles.title}>Предстоящи масажи</h3>
            <div className={`${styles.tr} ${styles.trMain}`}>
                <h3 className={styles.type}>Вид масаж</h3>
                <h3>Дата</h3>
                <h3 className={styles.hour}>Час</h3>
            </div>
            {
                massages.length !== 0
                    ? massages
                        .sort((a, b) => sortDate(a, b))
                        .slice(0, 5)
                        .map((res, index) => (
                            <div className={`${styles.tr} ${styles.massages}`} key={index}>
                                <p className={styles.type}>{index + 1}. {res.massage}</p>
                                <p className={styles.date}>{res.date}</p>
                                <p className={styles.hour}>{res.hour}</p>
                            </div>
                        ))
                    : <p className={`${styles.tr} ${styles.massages}`}>Нямата запазен час за масаж</p>
            }
            {
                massages.length > 5
                    ?
                    massages.length - 5 > 1
                        ? <h4 className={`${styles.tr} ${styles.massages} ${styles.more}`}>
                            Имате още {massages.length - 5} предстоящи масажи!</h4>
                        : <h4 className={`${styles.tr} ${styles.massages} ${styles.more}`}>
                            Имате още {massages.length - 5} предстоящ масаж!</h4>
                    : null
            }
        </div>
    )
}

export default UserMassages
