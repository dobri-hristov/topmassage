import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MassagesData.module.css'

const PricesData = ({ path, massage, price, id }) => {
    return (
        <article className={
            id % 2 === 0
                ? `${styles.tr} ${styles.trEven}`
                : `${styles.tr} ${styles.trOdd}`}
        >
            <p className={styles.linkName}>
                <Link className={styles.link} to={`massages/${path}`}>{massage}</Link>
            </p>
            <p>{price} лв.</p>
        </article>
    )
}

export default PricesData
