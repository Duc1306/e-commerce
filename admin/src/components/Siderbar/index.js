import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { TbSlideshow } from "react-icons/tb";
import { FaClipboardCheck } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const context = useContext(MyContext)
  const isOpenSubMenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubMenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubMenu(1)}
            >
              <span className="icon">
                <TbSlideshow />
              </span>
              Home Banner Slides
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? " colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/homeBannerSlide/add">Add Home Banner Slide</Link>
                </li>
                <li>
                  <Link to="/homeBannerSlide/list">Home Slides List</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 2 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubMenu(2)}
            >
              <span className="icon">
                <BiSolidCategory />
              </span>
              Category
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 2 && isToggleSubmenu === true
                  ? " colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/category">Category List</Link>
                </li>
                <li>
                  <Link to="/category/add">Add a category</Link>
                </li>
                <li>
                  <Link to="/subCategory">Sub Category List</Link>
                </li>
                <li>
                  <Link to="/subCategory/add">Sub Category List</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 3 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubMenu(3)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 3 && isToggleSubmenu === true
                  ? " colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/products">Product List</Link>
                </li>
                <li>
                  <Link to="/product/upload">Product Upload</Link>
                </li>
                <li>
                  <Link to="/productRAMS/add">Add Product RAM</Link>
                </li>
                <li>
                  <Link to="/productWEIGHT/add">Add Product WEIGHT</Link>
                </li>
                <li>
                  <Link to="/productSIZE/add">Add Product SIZE</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/orders">
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isOpenSubMenu(4)}
              >
                <span className="icon">
                  <FaClipboardCheck />
                </span>
                Orders
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 5 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubMenu(5)}
            >
              <span className="icon">
                <TbSlideshow />
              </span>
              Home Banners
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 5 && isToggleSubmenu === true
                  ? " colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/banners">Banners List</Link>
                </li>
                <li>
                  <Link to="/banners/add">Banners Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 6 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubMenu(6)}
            >
              <span className="icon">
                <TbSlideshow />
              </span>
              Home Side Banners
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 6 && isToggleSubmenu === true
                  ? " colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/homeSideBanners">Banners List</Link>
                </li>
                <li>
                  <Link to="/homeSideBanners/add">Banners List</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 7 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubMenu(7)}
            >
              <span className="icon">
                <TbSlideshow />
              </span>
              Home Bottom Banners
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 7 && isToggleSubmenu === true
                  ? " colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/homeBottomBanners">Banners List</Link>
                </li>
                <li>
                  <Link to="/homeBottomBanners/add">Banners List</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <br />
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Link to="/login">
              <Button variant="contained">
                <IoMdLogOut />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
