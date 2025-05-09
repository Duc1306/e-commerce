import React, { useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FiX } from "react-icons/fi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiImagesThin } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
const ProducUpload = () => {
  const [showBy, setshowBy] = useState("");
  const [catBy, setCatBy] = useState("");
  const [isFeattured, setisFeattured] = useState("");
  const [productRam, setProductRam] = useState([]);
  const [value, setValue] = useState(0);

  const handleChangeProductRams = (event) => {
    const { value } = event.target;

    const parsedValue = typeof value === "string" ? value.split(",") : value;

    setProductRam(parsedValue);
    
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 res-col">
          <h5 className="mb-0">Product Upload</h5>

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
              label="Product Upload"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <form className="form">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4 mt-0">
                <h5 className="mb-4">Basic Information</h5>
                <div className="form-group">
                  <h6>PRODUCT NAME</h6>
                  <input type="text" name="name" />
                </div>
                <div className="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea rows="5" cols="10"></textarea>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <FormControl size="Read only" className="w-100">
                        <Select
                          value={showBy}
                          className="w-100"
                          onChange={(e) => setshowBy(e.target.value)}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em value={null}>None</em>
                          </MenuItem>
                          <MenuItem className="text-capitalize" value="Men">
                            Men
                          </MenuItem>
                          <MenuItem className="text-capitalize" value="Woman">
                            Woman
                          </MenuItem>
                          <MenuItem className="text-capitalize" value="Kids">
                            Kids
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>SUB CATEGORY</h6>
                      <FormControl size="Read only" className="w-100">
                        <Select
                          value={catBy}
                          className="w-100"
                          onChange={(e) => setCatBy(e.target.value)}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          labelId="demo-select-small-label"
                        >
                          <MenuItem value="">
                            <em value={null}>None</em>
                          </MenuItem>
                          <MenuItem className="text-capitalize" value="Jeans">
                            Jeans
                          </MenuItem>
                          <MenuItem className="text-capitalize" value="Shirts">
                            Shirts
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRICE</h6>
                      <input type="text" name="price" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col">
                    <div class="form-group">
                      <h6>OLD PRICE </h6>
                      <input type="text" name="oldPrice" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>IS FEATURED</h6>
                      <FormControl size="Read only" className="w-100">
                        <Select
                          value={isFeattured}
                          className="w-100"
                          onChange={(e) => setisFeattured(e.target.value)}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          labelId="demo-select-small-label"
                        >
                          
                          <MenuItem value={true}>True</MenuItem>
                          <MenuItem value={false}>False</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <h6>PRODUCT STOCK </h6>
                      <input type="text" name="countInStock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <h6>BRAND</h6>
                      <input type="text" name="brand" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <h6>DISCOUNT</h6>
                      <input type="text" name="discount" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <h6>PRODUCT RAMS</h6>
                      <FormControl size="Read only" className="w-100">
                        <Select
                          multiple
                          value={productRam}
                          className="w-100"
                          onChange={handleChangeProductRams}
                          displayEmpty
                        >
                          
                          <MenuItem  value="4GB">
                            4GB
                          </MenuItem>
                          <MenuItem  value="8GB">
                            8GB
                          </MenuItem>
                          <MenuItem  value="10GB">
                            10GB
                          </MenuItem>
                          <MenuItem  value="12GB">
                            12GB
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="from-group">
                      <h6>RATTINGS</h6>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 mt-0">
            <div className="imagesUploadSec">
              <h5 className="mb-4">Media And Published</h5>
              <div className="imgUploadBox d-flex align-items-center">
                <div className="uploadBox">
                  <span className="remove">
                    <FiX />
                  </span>
                  <div className="box">
                    <span
                      className=" lazy-load-image-background "
                      style={{ color: "transparent", display: "inline-block" }}
                    >
                      <img
                        alt="image"
                        className="w-100"
                        src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      />
                    </span>
                  </div>
                </div>
                <div className="uploadBox">
                  <input type="file" multiple name="images" />
                  <div class="info">
                    <PiImagesThin />
                    <h5>image upload</h5>
                  </div>
                </div>
              </div>
              <br />
              <Button className="btn-blue vtb-lg btn-big w-100">
                <FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProducUpload;
