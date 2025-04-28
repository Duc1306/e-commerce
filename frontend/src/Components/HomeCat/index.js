import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
      "#fffecb",
      "#ecffec",
      "#feefea",
      "#fff3eb",
      "#fff3ff",
      "#f2fce4",
      "#feefea",
      "#fff3eb",
      "#feefea",
      "#ecffec",
      "#feefea",
      "#fffecb",
      "#fff3ff",
      "#f2fce4",
      "#feefea",
      "#fff3eb",
      "#feefea",
      "#ecffec",
    ]);
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">Featured Categories </h3>
        <div className="product_row w-100 mt-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={10}
            slidesPerGroup={3}
            navigation={true}
            className="mySwiper"
          >
            {itemBg?.map((item, index) => {
              return (
                <SwiperSlide>
                  <div
                    className="item text-center cursor"
                    style={{ background: item }}
                  >
                    <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png" />
                    <h6>Red Apple</h6>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeCat;
