import React from "react";
import Sidebar from "../../Components/SideBar";
import slideBanner2 from "../../assets/images/slideBanner2.jpg";

const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />

            <div className="content_right">
              <img src={slideBanner2} className="w-100" style={{borderRadius:'8px'}}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
