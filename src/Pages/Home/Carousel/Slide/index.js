import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './Slide.module.css'

const Slide = ({ image, title, info, legendClass }) => {
    const history = useHistory()

    return (
        <div className={styles.imgContainer}>
            <img src={image} alt="massage information" />
            <div className={`${styles.legend} ${styles[legendClass]}`}> 
                {
                    title
                        ? <h1>{title}</h1>
                        : null
                }
                <p>{info}</p>
                <button onClick={() => history.push('/reservation')} className={styles.btn}>Запази час</button>
            </div>
        </div>
    )
}

export default Slide
