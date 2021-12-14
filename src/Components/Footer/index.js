import React, { useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const [clickFb, checkFb] = useState(false)
    const [clickInsta, checkInsta] = useState(false)
    const [clickYt, checkYt] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.copyright}> &#169; 2021 Top Massage. All rights reserved</p>
                <ul className={styles.contacts}>
                    <li
                        onClick={() => checkFb(!clickFb)}
                        onMouseOver={() => checkFb(false)}
                        className={styles.facebook}>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                    <li
                        onClick={() => checkInsta(!clickInsta)}
                        onMouseOver={() => checkInsta(false)}
                        className={styles.insta}>
                        <i className="fab fa-instagram"></i>
                    </li>
                    <li
                        onClick={() => checkYt(!clickYt)}
                        onMouseOver={() => checkYt(false)}
                        className={styles.youtube}>
                        <i className="fab fa-youtube"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
