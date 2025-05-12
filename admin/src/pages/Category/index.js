import React from "react";
import { useContext, useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaUserCircle, FaEye, FaPencilAlt } from "react-icons/fa";
import { IoMdCart, IoIosTimer } from "react-icons/io";
import { MdShoppingBag, MdDelete } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { Chart } from "react-google-charts";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import { MyContext } from "../../App";

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import Checkbox from "@mui/material/Checkbox";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardBox from "../Dashboard/components/DashboardBox";
import { deleteData, fetchDataFromApi } from "../../utils/api";

const label = {
  inputProps: { "aria-label": "Checkbox demo" },
};

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

const Category = () => {

    const [catData ,setCatData] =useState([]);
    const [editId, setEditId] =useState(null)
    
    useEffect(()=>{
        window.scrollTo(0,0);

        fetchDataFromApi('/api/category').then((res) =>{
          setCatData(res);
        })
    },[])

    const deleteCat=(id) =>{
      deleteData(`/api/category/${id}`).then(res=>{
        fetchDataFromApi('/api/category').then((res) =>{
          setCatData(res);
        })
      })
    }
  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 w-100 flex-row p-4 align-items-center">
        <h5 className="mb-0">Category List</h5>
        <div className="ml-auto d-flex align-items-center">
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb
              href="#"
              label="Category"
              deleteIcon={<ExpandMoreIcon />}
            />
            {/* <StyledBreadcrumb
            type ="button"
              className="btn-blue ml-3 pl-3 pr-3"
              label="Add Category"
              href="/category/add"
              deleteIcon={<ExpandMoreIcon />}
            /> */}
            <Link to="/category/add">
              <Button className="btn-blue ml-3 pl-3 pr-3">Add Category</Button>
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <div className="card shadow border-0 p-3 mt-4">
        <div className="table-responsive mt-3">
          <table className="table table-bordered table-striped v-align">
            <thead className="thead-dark">
              <tr>
                <th style={{ width: "100px" }}>IMAGE</th>
                <th>CATEGORY</th>
                <th>COLOR</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                catData.length!==0 && catData?.map((item,index) =>{
                    return (
                      <tr>
                        <td>
                          <div
                            className="d-flex align-items-center "
                            style={{ width: "150px" }}
                          >
                            <div
                              className="imgWrapper"
                              style={{ width: "50px", flex: "0 0 50px" }}
                            >
                              <div className="img card shadow m-0">
                                <img src={item.images[0]} className="w-100" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.name} </td>
                        <td>{item.color}</td>

                        <td>
                          <div className="actions d-flex align-items-center">
                            <Link to ={`/category/edit/${item.id}`}>
                              <Button className="success" color="success">
                                <FaPencilAlt />
                              </Button>
                            </Link>
                            <Button
                              className="error"
                              color="error"
                              onClick={() => deleteCat(item.id)}
                            >
                              <MdDelete />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                })
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
