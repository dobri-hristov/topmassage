import React from 'react'
import styles from './Headline.module.css'

const Headline = ({ title, color }) => {
    return (
        <div className={color === 'black'
            ? `${styles.container} ${styles.black}`
            : `${styles.container} ${styles.purple}`}>
            <h2>{title}</h2>
        </div>
    )
}

export default Headline
