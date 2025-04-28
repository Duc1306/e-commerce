import React from "react";
import Slider from "react-slick";
import slideBanner1 from "../../assets/images/slideBanner1.jpg"
import slideBanner2 from "../../assets/images/slideBanner2.jpg"
import slideBanner3 from "../../assets/images/slideBanner3.jpg";
import slideBanner4 from "../../assets/images/slideBanner4.jpg";
import slideBanner5 from "../../assets/images/slideBanner5.jpg";
import slideBanner6 from "../../assets/images/slideBanner6.jpg";
import slideBanner7 from "../../assets/images/slideBanner7.jpg";

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
          <img src={slideBanner1} alt="slideBanner1" className="w-100" />
        </div>
        <div className="item">
          <img src={slideBanner2} alt="slideBanner2" className="w-100" />
        </div>
        <div className="item">
          <img src={slideBanner3} alt="slideBanner3" className="w-100" />
        </div>
        <div className="item">
          <img src={slideBanner4} alt="slideBanner4" className="w-100" />
        </div>
        <div className="item">
          <img src={slideBanner5} alt="slideBanner5" className="w-100" />
        </div>
        <div className="item">
          <img src={slideBanner6} alt="slideBanner6" className="w-100" />
        </div>
        <div className="item">
          <img src={slideBanner7} alt="slideBanner7" className="w-100" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
