import React from "react";

const ProductDetails = () => {
  return (
    <section>
      <div className="productDetails section">
        <div className="container">
          <div className="row d-flex align-items-start">
            {/* Main Image and Text Section */}
            <div className="col-md-12 d-flex">
              {/* Main Image Section */}
              <div className="col-md-4 d-flex flex-column align-items-center">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg"
                  alt="Product"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    marginBottom: "10px",
                  }}
                />
              </div>

              {/* Text Section */}
              <div className="col-md-7 d-flex flex-column">
                <h2 className="hd text-capitalize font-bold">
                  All Natural Italian-Style Chicken Meatballs
                </h2>
                <ul className="list list-inline">
                  <li className="list list-inline">
                    <div className="d-flex align-items-center">
                      <span className="text-light mr-2">Brands :</span>
                      <span>Welch's</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
