import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://img.freepik.com/free-vector/realistic-travel-agency-twitter-header_23-2149382864.jpg?t=st=1745748111~exp=1745751711~hmac=4ddaa5fbd70b269238caad633015fd7c2dd7fe7ab9be52b06fdb16a0e1c2c076&w=1380"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://img.freepik.com/free-vector/realistic-travel-agency-twitter-header_23-2149382864.jpg?t=st=1745748111~exp=1745751711~hmac=4ddaa5fbd70b269238caad633015fd7c2dd7fe7ab9be52b06fdb16a0e1c2c076&w=1380"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://img.freepik.com/free-vector/realistic-travel-agency-twitter-header_23-2149382864.jpg?t=st=1745748111~exp=1745751711~hmac=4ddaa5fbd70b269238caad633015fd7c2dd7fe7ab9be52b06fdb16a0e1c2c076&w=1380"
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
