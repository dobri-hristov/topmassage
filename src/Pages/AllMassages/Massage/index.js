import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Massage.module.css'

const Massage = ({ data }) => {
    return (
        <div className={styles.container} >
            <h3 className={styles.title}>{data.massageName}</h3>
            <div className={styles.imgInfoContainer}>
                <div className={styles.imgContainer}>
                    <img src={data.img} alt={data.massageName} />
                </div>
                <div className={styles.infoContainer}>
                    <p>{data.massageInfo}</p>
                    <div>
                        <Link className={styles.link} to={`/massages/${data.path}`}>
                            <i className="fas fa-search"></i>
                            Вижте повече!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Massage
