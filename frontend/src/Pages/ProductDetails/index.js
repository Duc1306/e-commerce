import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "./../../Components/QuantityBox/index";
import { Button, Tooltip } from "@mui/material";
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);
  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item ">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands: </span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item ">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <span className="text-light cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-3">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ml-2">$14.00</span>
              </div>
              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent.Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                ad litora torquent
              </p>
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list-inline-item mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      500g
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className=" btn-blue btn-lg btn-big btn-round">
                  <BsCartFill /> &nbsp; Add to cart
                </Button>
                <Tooltip title="Add to WishList" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-cricle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-cricle ml-2">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Review (3)
                  </Button>
                </li>
              </ul>
              <br />

              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>Trịnh Mih Đức</p>
                </div>
              )}
              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-reponsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(font to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folder-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5"L x 18.5"W x 16"H</p>
                          </td>
                        </tr>
                        <tr className="folder-w-wheels">
                          <th>Folded (w wheels)</th>
                          <td>
                            <p>32.5"L x 24"W x 18.5"H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-throgh">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle Height (ground to handle)</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12" air / wide track slick tread</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer question & answers</h3>
                      <div className="card p-4 reviewsCard  flex-row">
                        <div className="image">
                          <img src="https:wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                          <span className="text-g d-block text-center font-weight-bold">
                            Rinku Verma
                          </span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="" style={{ color: "#818181" }}>
                              13/06/2003
                            </h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>
                          <p>dnewkdnjk</p>
                        </div>
                      </div>

                      <br className="res-hide" />
                      <br className="res-hide" />
                      <form className="reviewForm">
                        <h4>Add a review</h4>
                        <div className="form-group">
                          <textarea
                            name="review"
                            className="form-control"
                            placeholder="Write a Review"
                          />
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="userName"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={4.5}
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <Button
                            type="submit"
                            className="btn-blue btn-lg btn-big btn-round"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <RelatedProducts title="RELATED PRODUCTS" />
          <RelatedProducts title="RECENTLY VIEWED PRODUCTS" />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
