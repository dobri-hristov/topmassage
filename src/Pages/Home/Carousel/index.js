import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from './Slide'
import styles from './Carousel.module.css'
import './styles.css'

const CustomCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            autoPlay
            interval='7000'
            infiniteLoop
            transitionTime={1500}
            showThumbs={false}
            showStatus={false}
            className={styles.container}
        >
            <Slide
                image="https://res.cloudinary.com/dfwwzfev2/image/upload/v1638523902/top-massage/carousel/classicMassage_dmiyb5.jpg"
                title='Класически масаж'
                info='Време е за релакс'
                legendClass='legend1'
            />
            <Slide
                image="https://res.cloudinary.com/dfwwzfev2/image/upload/v1638525728/top-massage/carousel/sportMassage4_vfui0k.jpg"
                title='Спортен масаж'
                info='Отърви се от болката'
                legendClass='legend2'
            />
            <Slide
                image="https://res.cloudinary.com/dfwwzfev2/image/upload/v1638523901/top-massage/carousel/healingMassage_r2w9t8.jpg"
                title='Лечебен масаж'
                info='Слей се с природата'
                legendClass='legend2'
            />
            <Slide
                image="https://res.cloudinary.com/dfwwzfev2/image/upload/v1638523902/top-massage/carousel/relaxing_osarhr.png"
                info='Отпусни тялото и сетивата си в Top Massage студио'
                legendClass='legend3'
            />
        </Carousel>
    )
}

export default CustomCarousel
