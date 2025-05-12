import React, { useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Button, CircularProgress } from "@mui/material";

import { FaCloudUploadAlt } from "react-icons/fa";
import { PiImagesThin } from "react-icons/pi";
import {  postData } from "../../utils/api";
import { useNavigate } from "react-router";

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
const CategoryAdd = () => {
    const [isLoading, setIsLoading] =useState(false)
    const [formFields, setFormFileds] =useState({
        name: '',
        images: [],
        color:''
    })

    const history =useNavigate()

    const changeInput =(e) =>{
        setFormFileds(()=>({
          ...formFields,[ e.target.name]:e.target.value
           
        }))
    }

    const addImgUrl =(e) =>{
      const arr =[];
      arr.push(e.target.value);
      setFormFileds(()=> (
        {
        ...formFields,
        [e.target.name] :arr
        }
      ))
    }

    const addCategory =(e) =>{
        e.preventDefault();
        setIsLoading(true);
       postData("/api/category/create", formFields).then(res=>{
        setIsLoading(false);
        history('/category')
       })
    }
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 mt-2 res-col">
          <h5 className="mb-0">Add Category</h5>

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
              label="Category"
              deleteIcon={<ExpandMoreIcon />}
            />
            <StyledBreadcrumb
              label="Add Category"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={addCategory}>
          <div className="row">
            <div className="col-md-9">
              <div className="card p-4 mt-0">
                <div className="form-group">
                  <h6>Category Name</h6>
                  <input
                    type="text"
                    name="name"
                    value={formFields.name}
                    onChange={changeInput}
                  />
                </div>
                <div className="form-group">
                  <h6>Color</h6>
                  <input
                    type="text"
                    name="color"
                    value={formFields.color}
                    onChange={changeInput}
                  />
                </div>
                <div className="imagesUploadSec">
                  <h5 className="mb-4">Media And Pubilshed</h5>
                  <div className="imgUploadBox d-flex align-items-center">
                    <div className="uploadBox">
                      <input type="file" multiple name="images" />
                      <div className="info">
                        <PiImagesThin />
                        <h5>image upload</h5>
                      </div>
                    </div>
                  </div>
                  <br />
                  <Button
                    type="submit"
                    className="btn-blue btn-lg btn-big w-100"
                  >
                    <FaCloudUploadAlt /> &nbsp;
                    {isLoading === true ? (
                      <CircularProgress color="inherit" className="loader" />
                    ) : (
                      " PUBLISH AND VIEW"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryAdd;
