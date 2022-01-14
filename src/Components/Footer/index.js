import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.copyright}> &#169; {year} Top Massage. All rights reserved</p>
                <ul className={styles.contacts}>
                    <li
                        className={styles.facebook}>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                    <li
                        className={styles.insta}>
                        <i className="fab fa-instagram"></i>
                    </li>
                    <li
                        className={styles.youtube}>
                        <i className="fab fa-youtube"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
