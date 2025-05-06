import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { IoShieldHalfSharp } from "react-icons/io5";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotifications, setisOpennotifications] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(isOpennotifications);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  const handleOpennotifications = () => {
    setisOpennotifications(true);
  };
  const handleClosenotifications = () => {
    setisOpennotifications(false);
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="row d-flex align-items-center w-100">
          <div className="col-sm-2 part1">
            <Link className="d-flex align-items-center logo" to={"/"}>
              <img src={logo} />
              <span className="ml-2">ECOMMERCE</span>
            </Link>
          </div>
          <div className="col-sm-3 d-flex align-items-center part2 res-hide">
            <Button className="rounded-circle mr-3">
              <MdMenuOpen />
            </Button>
            <SearchBox />
          </div>
          <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
            <Button className="rounded-circle mr-3">
              <MdOutlineLightMode />
            </Button>
            <div className="dropdownWrapper position-relative">
              <Button
                className="rounded-circle mr-3"
                onClick={handleOpennotifications}
              >
                <FaRegBell />
              </Button>
              <Menu
                anchorEl={isOpennotifications}
                id="notifications"
                className="notifications dropdown_list"
                open={openNotification}
                onClose={handleClosenotifications}
                onClick={handleClosenotifications}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head pl-3 pb-0">
                  <h4>Orders (12) </h4>
                </div>
                <Divider className=" mb-1" />
                <div claclassNamess="scroll">
                  <MenuItem onClick={handleClosenotifications}>
                    <div class="d-flex">
                      <div>
                        <div className="userImg false">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul </b>added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotifications}>
                    <div class="d-flex">
                      <div>
                        <div className="userImg false">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul </b>added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotifications}>
                    <div class="d-flex">
                      <div>
                        <div className="userImg false">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul </b>added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotifications}>
                    <div class="d-flex">
                      <div>
                        <div className="userImg false">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul </b>added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotifications}>
                    <div class="d-flex">
                      <div>
                        <div className="userImg false">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Mahmudul </b>added to his favorite list
                            <b> Leather belt steve madden</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>

                <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                  <Button className="btn-blue w-100">
                    View All Nofications
                  </Button>
                </div>
              </Menu>
            </div>

            <div className="myAccWrapper">
              <Button
                className="myAcc align-items-center"
                onClick={handleOpenMyAccDrop}
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                  </span>
                </div>
                <div className="userInfo res-hide">
                  <h4>Minh Duc</h4>
                  <p className="mb-0">minhduc03</p>
                </div>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMyAcc}
                onClose={handleCloseMyAccDrop}
                onClick={handleCloseMyAccDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  My Account
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <IoShieldHalfSharp />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
