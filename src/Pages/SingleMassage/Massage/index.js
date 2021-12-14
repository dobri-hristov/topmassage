import React, { Fragment } from 'react'
import styles from './Massage.module.css'

const Massage = ({ data }) => {
    return (
        <Fragment>
            <div className={styles.path}>
                <h3>Масажи/{data.name}</h3>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>{data.name}</h1>
                <div className={styles.firstImg}>
                    <img src={data.mainImg} alt="classic massage" />
                </div>
                <div className={styles.info}>
                    <div>{data.mainInfo}</div>
                    <div>
                        {
                            data.secondImg
                                ? <div className={styles.secondImg}>
                                    <img src={data.secondImg} alt="classic massage" />
                                </div>
                                : null
                        }
                        {
                            data.moreInfo.map((info, index) => (<p key={index}>{info}</p>))
                        }
                    </div>
                    <div className={styles.priceContainer}>
                        <h3>Цени:</h3>
                        <div className={styles.prices}>
                        {
                            Object.keys(data.prices).map((key, index) => (
                                <p className={styles.price} key={index}>{key} мин. - {data.prices[key]} лв. </p>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Massage
