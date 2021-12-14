import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'

const Header = () => {
    const [colors, setColors] = useState('gray')

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    })

    const listenScrollEvent = () => {
        window.scrollY < 160 ? setColors('gray') : setColors('black')
    }

    return (
        <div className={`${styles.container} ${styles[`${colors}`]}`}>
            <p><i className="fas fa-map-marker-alt"></i> град София, ж.к. Люлин, бул. "Царица Йоана" 49</p>
            <p><i className="fas fa-phone-alt"></i> +359 878 456 333</p>
            <p><i className="fas fa-envelope"></i> topmassage@gmail.com</p>
        </div>
    )
}

export default Header
