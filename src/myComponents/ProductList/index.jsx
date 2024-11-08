
import React, { useState } from "react";
import ProductZoom from "../ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../QuantityBox";
import Button from "@mui/material/Button";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const ProductDetails = () => {

  const [activeSize, setActiveSize] = useState(null);
  const isActive = (index) => {
     setActiveSize(index);
  }
  return (
    <section className="productDetails section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pl-5">
            <ProductZoom />
          </div>
          <div className="col-md-7 pl-5 pr-5">
            <h2 className="hd text-capitalize font-bold">
              All Natural Italian-Style Chicken Meatballs
            </h2>
            <ul className="list-inline-item d-flex align-items-center">
              <li className="list list-inline">
                <div className="d-flex align-items-center">
                  <span className="text-dark mr-2">Brands :</span>
                  <span>Welch's</span>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-item-center ">
                  <Rating
                    name="read-only"
                    value={4.5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <span className="text-slate-400 cursor ml-2">1 Review</span>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text-dark mr-2">SKU</span>
                  <span>Welch's</span>
                </div>
              </li>
            </ul>
            <div className="d-flex info mb-3">
              <span class="oldPrice">$20.00</span>
              <span className=" netPrice text-red-500 ml-2">$15.00</span>
            </div>
            <span className="badge bg-green-600 ">IN STOCK</span>
            <p className="text-gray-700 mt-2">
              All Natural Italian-style Chicken Meatballs are made with
              high-quality ingredients and are prepared with fresh, unsalted
              chicken breasts Natural Italian-style Chicken Meatballs are made
              with high-quality ingredients and are prepared with fresh,
              unsalted chicken breasts.
            </p>

            <div className="productSize d-flex align-items-center">
              <span>Size / Weight:</span>
              <ul className="list list-inline mb-0 pl-4">
                <li className="list-inline-item">
                  <a
                    className={`${activeSize === 0 ? "active" : ""}`}
                    onClick={() => isActive(0)}
                  >
                    50g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`${activeSize === 1 ? "active" : ""}`}
                    onClick={() => isActive(1)}
                  >
                    100g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`${activeSize === 2 ? "active" : ""}`}
                    onClick={() => isActive(2)}
                  >
                    200g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`${activeSize === 3 ? "active" : ""}`}
                    onClick={() => isActive(3)}
                  >
                    300g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`${activeSize === 4 ? "active" : ""}`}
                    onClick={() => isActive(4)}
                  >
                    500g
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center mt-2">
              <QuantityBox />
              <Button
                className=" btn-blue btn-lg btn-big btn-round "
                style={{
                  backgroundColor: "#1e40af",
                  color: "white",
                  marginLeft: "20px",
                }}
              >
                <BsCart4 /> &nbsp; Add to Cart
              </Button>
                
                <Tooltip title="Add to wishlist" placement="top">
                   <Button className="btn-blue btn-lg btn-big btn-circle ml-4 ">
                    <FaRegHeart />
                  </Button>
                </Tooltip>          
              
              <Button className=" btn-blue btn-lg btn-big btn-circle ml-4 ">
                <BsCart4 />
              </Button>
                        

              <Button className=" btn-blue btn-lg btn-big btn-circle ml-4 ">
                <MdOutlineCompareArrows />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
