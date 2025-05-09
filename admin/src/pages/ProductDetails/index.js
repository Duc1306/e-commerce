import React, { useRef } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "react-slick";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdPalette } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { FaReply } from "react-icons/fa";

// Styled Breadcrumb sử dụng MUI + styled()
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
const ProductDetails = () => {

  const productSliderBig = useRef();
  const productSliderSml = useRef();
  var productSliderOptions = {
    dots: false, // Hiển thị chấm điều hướng
    infinite: false, // Lặp vô hạn
    speed: 500, // Thời gian chuyển slide (ms)
    slidesToShow: 1, // Hiển thị 1 ảnh mỗi lần
    slidesToScroll: 1, // Cuộn 1 ảnh mỗi lần
    arrows: false,
  };

  const productSliderSmlOptions = {
    dots: false,
    infinite: false, // Cho phép lặp để không giật khi kéo hết
    speed: 300, // Thời gian chuyển slide
    slidesToShow: 4,
    slidesToScroll: 1,
    
    touchThreshold: 10, // Giảm giật
    cssEase: "ease-in-out", // Làm mượt hiệu ứng
    arrows: false,
  };
  

  const goToSlide = (index) => {
    if (productSliderBig.current) {
      productSliderBig.current.slickGoTo(index);
    }

    if (productSliderSml.current) {
      productSliderSml.current.slickGoTo(index);
    }
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 res-col">
          <h5 className="mb-0">Product View</h5>

          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Products"
              deleteIcon={<ExpandMoreIcon />}
            />
            <StyledBreadcrumb
              label="Product View"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSEction">
          <div className="row">
            <div className="col-md-5">
              <div class="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 class="mb-4">Product Gallery</h6>
                <Slider
                  {...productSliderOptions}
                  ref={productSliderBig}
                  className="sliderBig mb-2"
                >
                  <div className="item" onClick={() => goToSlide(1)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(2)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(3)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(4)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(5)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                </Slider>

                <Slider
                  {...productSliderSmlOptions}
                  ref={productSliderSml}
                  className="sliderSml "
                >
                  <div className="item" onClick={() => goToSlide(1)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(2)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(3)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(4)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(15)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      alt="Product Preview"
                      className="w-100"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className=" pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Product Details</h6>
                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>
                <div className="productInfo mt-4">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Ecstasy</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategoryAlt />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Man's</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FiSettings />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <div className="row">
                          <ul className="list list-inline tags sml">
                            <li className="list-inline-item">
                              <span>SUITE</span>
                            </li>
                            <li className="list-inline-item">
                              <span>PARTY</span>
                            </li>
                            <li className="list-inline-item">
                              <span>PARTY</span>
                            </li>
                            <li className="list-inline-item">
                              <span>DRESS</span>
                            </li>
                            <li className="list-inline-item">
                              <span>SMART</span>
                            </li>
                            <li className="list-inline-item">
                              <span>MAN</span>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <div className="row">
                          <ul className="list list-inline tags sml">
                            <li className="list-inline-item">
                              <span>RED</span>
                            </li>
                            <li className="list-inline-item">
                              <span>BLUE</span>
                            </li>
                            <li className="list-inline-item">
                              <span>WHITE</span>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Man's</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdShoppingCart />
                      </span>
                      <span className="name">Size</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(68) Piece</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaEdit />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(03) Review</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdVerified />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      <span>9 5 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h6 className="mt-4 mb-3">Product Description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit repellendus expedita esse cupiditate quos doloremque
              rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
              voluptatem delectus nam, molestiae, repellendus ab sint quo
              aliquam debitis amet natus doloremque laudantium? Repudiandae,
              consequuntur, officiis quidem quo deleniti, autem non laudantium
              sequi error molestiae ducimus accusamus facere velit consectetur
              vero dolore natus nihil temporibus aspernatur quia consequatur?
              Consequuntur voluptate deserunt repellat tenetur debitis molestiae
              doloribus dicta. In rem illum dolorem atque ratione voluptates
              asperiores maxime doloremque laudantium magni neque ad quae quos
              quidem, quaerat rerum ducimus blanditiis reiciendis
            </p>
            <br />
            <h6 className="mt-4 mb-4">Rating Analytics</h6>
            <div className="ratingSection">
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">5 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">4 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">3 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">2 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">1 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
            </div>
            <br />
            <h6 className="mt-4 mb-4">Customer_reviews</h6>
            <div className="reviewsSecrion">
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        className=""
                        name="read-only"
                        value={4.5}
                        readOnly
                        size="medium"
                        precision={0.5}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        className=""
                        name="read-only"
                        value={4.5}
                        readOnly
                        size="medium"
                        precision={0.5}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        className=""
                        name="read-only"
                        value={4.5}
                        readOnly
                        size="medium"
                        precision={0.5}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        className=""
                        name="read-only"
                        value={4.5}
                        readOnly
                        size="medium"
                        precision={0.5}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
            </div>
            <h6 className="mt-4 mb-4">Review Reply Form</h6>
            <form className="reviewForm">
              <textarea placeholder="write here"></textarea>
              <Button className="btn-blue btn-big btn-lg w-100 mt-4">
                Drop Your Replies
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
