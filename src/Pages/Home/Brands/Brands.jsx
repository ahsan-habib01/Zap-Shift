import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../assets/brands/amazon.png'
import slide2 from '../../../assets/brands/amazon_vector.png'
import slide3 from '../../../assets/brands/casio.png'
import slide4 from '../../../assets/brands/moonstar.png'
import slide5 from '../../../assets/brands/randstad.png'
import slide6 from '../../../assets/brands/star.png'
import slide7 from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const brandLogos = [slide1, slide2, slide3, slide4, slide5, slide6, slide7]

const Brands = () => {
  return (
    <div className=" text-center text-secondary">
      <h2 className="py-10 text-3xl font-bold mb-5">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <div>
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Brands;