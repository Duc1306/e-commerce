import React from "react";

import slideBanner1 from "../../assets/images/slideBanner1.jpg";
import slideBanner2 from "../../assets/images/slideBanner2.jpg";
import slideBanner3 from "../../assets/images/slideBanner3.jpg";
import slideBanner4 from "../../assets/images/slideBanner4.jpg";
import slideBanner5 from "../../assets/images/slideBanner5.jpg";
import slideBanner6 from "../../assets/images/slideBanner6.jpg";
import slideBanner7 from "../../assets/images/slideBanner7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeBanner = () => {
  
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          
          navigation={true}
          className="mySwiper"
          loop={false} // để lặp vô hạn
          
          autoplay={{
            delay: 2000, // 3s chuyển slide
            disableOnInteraction: false, // vẫn autoplay dù tương tác
          }}
        >
          <SwiperSlide>
            <div className="item">
              <img src={slideBanner1} alt="slideBanner1" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slideBanner2} alt="slideBanner2" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slideBanner3} alt="slideBanner3" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slideBanner4} alt="slideBanner4" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slideBanner5} alt="slideBanner5" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slideBanner6} alt="slideBanner6" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slideBanner7} alt="slideBanner7" className="w-100" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
