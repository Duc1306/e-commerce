import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";

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
            <a href="/">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubMenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
              </Button>
            </a>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubMenu(1)}
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
                activeTab === 1 && isToggleSubmenu === true
                  ? " colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <a href="/products">Product List</a>
                </li>
                <li>
                  <a href="/product/details">Product View</a>
                </li>
                <li>
                  <a href="/product/upload">Product Upload</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 2 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(2)}
            >
              <span className="icon">
                <FaCartArrowDown />
              </span>
              Orders
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
        </ul>
        <br />
        <div class="logoutWrapper">
          <div class="logoutBox">
            <Button variant="contained">
              <IoMdLogOut />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
