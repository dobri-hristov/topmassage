import React from 'react'
import CustomCarousel from './Carousel/index'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <CustomCarousel />
            <section className={styles.about}>
                <p><span className={styles.name}>Top Massage</span> е луксозно масажно студио в София от градски тип,
                    който предлага комплексна услуга, свързана с грижата за здравето, красотата и добрата физическа форма.</p>
                <p>В изискана обстановка, съчетаваща стилен дизайн, висока функционалност и удобство,
                    гостите имат възможност да се насладят на богата палитра от класически, екзотични и авторски масажи.</p>
                <section className={styles.advantages}>
                    <article className={styles.advantageContainer}>
                        <p className={styles.iconContainer}>
                            <i className={`fas fa-question ${styles.icon}`}></i>
                        </p>
                        <h3>Защо нас ?</h3>
                        <p>Доверете се на нашите професионалисти. Те ще се съобразят с вашите нужди и изисквания и ще ви предложат масаж,
                             разработен специално за вас. В ръцете на нашите професионалисти, ще почувствате несравнима наслада за вашите сетива.</p>
                    </article>
                    <article className={styles.advantageContainer}>
                        <p className={styles.iconContainer}>
                            <i className={`fas fa-smile ${styles.icon}`}></i>
                        </p>
                        <h3>Цели ?</h3>
                        <p>Облекчаване на физическа болка, възстановяване работоспособността на мускулите, 
                            постигане на тонизиращо въздействие върху целия организъм и повишаване на имунната защита на организма.</p>
                    </article>

                    <article className={styles.advantageContainer}>
                        <p className={styles.iconContainer}>
                            <i className={`fas fa-check ${styles.icon}`}></i>
                        </p>
                        <h3>Резултати ?</h3>
                        <p>Масажът дава на мускулите нещо повече от обикновената почивка,
                            тъй като 5-минутният масаж оказва върху тях по-голямо влияние ,отколкото 20- минутната почивка.
                            Масажът действа преди всичко на периферната нервна система /ПНС/.</p>
                    </article>

                </section>
                <p>Заповядайте в <span className={styles.name}>Top Massage</span> и поглезете тялото и сетивата си!</p>
            </section>
        </div>
    )
}

export default Home
