import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import InnerImageZoom from "react-inner-image-zoom";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };
  return (
    <div className="productZoom">
      <div className="productZoom position-relative">
        <div className="badge badge-primary">23%</div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          slidesPerGroup={1}
          className="zoomSliderBig"
          ref={zoomSliderBig}
        >
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp`}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg`}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={true}
        slidesPerGroup={1}
        className="zoomSlider"
        ref={zoomSlider}
      >
        <SwiperSlide>
          <div className={`item ${slideIndex === 0 && "item_active"}`}>
            <img
              src={`https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp`}
              className="w-100"
              onClick={() => goto(0)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 1 && "item_active"}`}>
            <img
              src={`https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg`}
              className="w-100"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 2 && "item_active"}`}>
            <img
              src={`https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg`}
              className="w-100"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 3 && "item_active"}`}>
            <img
              src={`https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg`}
              className="w-100"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 4 && "item_active"}`}>
            <img
              src={`https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg`}
              className="w-100"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductZoom;
