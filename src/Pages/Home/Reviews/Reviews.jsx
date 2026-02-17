import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div className=" text-center text-secondary">
      <div className="py-15 space-y-10 text-center text-secondary">
        <h2 className="text-3xl font-bold mb-5">
          What our customers are sayings
        </h2>
        <p className=" max-w-2xl mx-auto mt-2">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!!
        </p>
      </div>

      <>
        <Swiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '30%',
            depth: 150,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <div>
            {reviews.map(review => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review}></ReviewCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
