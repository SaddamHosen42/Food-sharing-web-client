import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from './Slider/Slider1';
import Slider2 from './Slider/Slider2';
import Slider3 from './Slider/Slider3';

const Banner = () => {
    return (
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            }
          }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          className="w-full h-screen banner-swiper"
        >
          <SwiperSlide>
            <Slider1></Slider1>
          </SwiperSlide>
          <SwiperSlide>
            <Slider2></Slider2>
          </SwiperSlide>
          <SwiperSlide>
            <Slider3></Slider3>
          </SwiperSlide>
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 group">
          <svg className="w-6 h-6 text-white group-hover:text-primary-custom transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 group">
          <svg className="w-6 h-6 text-white group-hover:text-primary-custom transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* Custom Pagination Styles */}
        <style jsx>{`
          .banner-swiper .swiper-pagination {
            bottom: 30px !important;
            display: flex !important;
            justify-content: center !important;
            gap: 12px !important;
          }
          
          .swiper-pagination-bullet-custom {
            width: 12px !important;
            height: 12px !important;
            background: rgba(255, 255, 255, 0.5) !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            backdrop-filter: blur(4px) !important;
          }
          
          .swiper-pagination-bullet-active-custom {
            background: #29e723 !important;
            transform: scale(1.3) !important;
            box-shadow: 0 0 20px rgba(41, 231, 35, 0.6) !important;
          }
          
          .swiper-pagination-bullet-custom:hover {
            background: rgba(255, 255, 255, 0.8) !important;
            transform: scale(1.1) !important;
          }
        `}</style>
      </div>
    );
};

export default Banner;