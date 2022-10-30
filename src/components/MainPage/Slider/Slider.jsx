import sliderImage_1 from '../../../assets/img/slidersImage/SliderImage_1.png'
import sliderImage_2 from '../../../assets/img/slidersImage/SliderImage_2.png'
import sliderImage_3 from '../../../assets/img/slidersImage/SliderImage_3.jpg'
import style from '../MainPage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';


const Slider = () => {
        return (
            <Swiper className={style.slider}
                modules={[Navigation, Pagination, A11y,Autoplay]}
                autoplay={{delay:3000}}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide><img src={sliderImage_1} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={sliderImage_2} alt="img"/></SwiperSlide>
                <SwiperSlide><img src={sliderImage_3} alt="img"/></SwiperSlide>
            </Swiper>
        );
}

export default Slider