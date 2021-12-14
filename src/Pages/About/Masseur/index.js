import React from 'react'
import styles from '../About.module.css'

const Masseur = ({ imgPath, name, position, info }) => {
    return (
        <article className={styles.employee}>
            <img src={imgPath} alt={name} />
            <h3 className={styles.employeeName}>{name}</h3>
            <h5 className={styles.employeePosition}>{position}</h5>
            <p className={styles.employeeInfo}>{info}</p>
        </article>
    )
}

export default Masseur
