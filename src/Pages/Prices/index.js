import React, { useState, useEffect } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import MassagesData from './MassagesData'
import LoadingProgress from '../../Shared/Components/LoadingProgress'
import Headline from '../../Shared/Components/Headline'
import styles from './Prices.module.css'

const PricesPage = () => {
    const [data, setData] = useState([])
    const [isMassages, setIsMassages] = useState(false)

    useEffect(() => {
        if (!isMassages) {
            const db = getDatabase();
            onValue(ref(db, 'prices'), (snapshot) => {
                setData(snapshot.val());
                setIsMassages(true)
            })
        }
    }, [isMassages])

    return (
        <div className={styles.container}>
            <Headline title='Цени' color='black' />
            <section className={styles.table}>
                {
                    data.length !== 0
                        ? data.map((massage, index) => (
                            < MassagesData
                                path={massage.path}
                                massage={massage.type}
                                price={massage.price}
                                styles key={index}
                                id={index} />
                        ))
                        : <LoadingProgress />
                }
            </section>
            <p className={styles.discount}>*20% остъпка при онлайн запазване на час през вашия профил.</p>
        </div >
    )
}

export default PricesPage
