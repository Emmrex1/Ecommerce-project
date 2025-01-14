import Sidebar from "@/myComponents/SideBar";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { PiDotsNineFill } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductDetail from "../../myComponents/ProductDetail";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { View } from "lucide-react";
import { ProductView } from "@/myComponents/ProductView";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />
            <div className="content_right">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                className="w-100"
                style={{ borderRadius: "8px" }}
              />

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-item-center btnWrapper">
                  <button
                    className={productView === "one" && "ViewOneItemPerview"}
                    onClick={() => setProductView("one")}
                  >
                    <IoMdMenu />
                  </button>
                  <button
                    className={productView === "two" && "ViewTwoItemPerview"}
                    onClick={() => setProductView("two")}
                  >
                    {" "}
                    <BiGridAlt />
                  </button>
                  <button
                    className={
                      productView === "three" && "ViewThreeItemPerview"
                    }
                    onClick={() => setProductView("three")}
                  >
                    {" "}
                    <PiDotsNineFill />{" "}
                  </button>
                  <button
                    className={productView === "four" && "ViewFourItemPerview"}
                    onClick={() => setProductView("four")}
                  >
                    {" "}
                    <CgMenuGridR />
                  </button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button
                    className={
                      productView === "three" && "ViewThreeItemPerview"
                    }
                    onClick={handleClick}
                  >
                    Shop 9<FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showPerPageDropdown"
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                    <MenuItem onClick={handleClose}>60</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                <ProductView />
              </div>
              <div className="d-flex align-item-center justify-content-center mt-20 ml-auto">
                <Pagination count={10} color="primary" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
