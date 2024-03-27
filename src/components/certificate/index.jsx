import { Component } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// images
import img1 from '../../assets/images/srtf-1.png';
import img2 from '../../assets/images/srtf-2.png';
import img3 from '../../assets/images/srtf-3.png';
import img4 from '../../assets/images/srtf-4.png';
import img5 from '../../assets/images/srtf-5.png';


import './sertificate.scss';

export class Sertificate extends Component {
    render() {
        return (
            <section id='sertf' className='sertf'>
                <div className="container">
                    <h1 className='sertf__title'>Качество продукции подтверждают <span>сертификаты</span></h1>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 70,
                            depth: 80,
                            modifier: 1,
                            slideShadows: false,
                        }} 
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            530: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {

                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            838: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1064: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                        }}
                        navigation={true}
                        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img height={284} className='sertf__img' src={img1} alt="swiper" /></SwiperSlide>
                        <SwiperSlide><img height={284} className='sertf__img' src={img2} alt="swiper" /></SwiperSlide>
                        <SwiperSlide><img height={284} className='sertf__img' src={img3} alt="swiper" /></SwiperSlide>
                        <SwiperSlide><img height={284} className='sertf__img' src={img4} alt="swiper" /></SwiperSlide>
                        <SwiperSlide><img height={284} className='sertf__img' src={img5} alt="swiper" /></SwiperSlide>
                        <SwiperSlide><img height={284} className='sertf__img' src={img1} alt="swiper" /></SwiperSlide>
                        <SwiperSlide><img height={284} className='sertf__img' src={img2} alt="swiper" /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        )
    }
}

export default Sertificate