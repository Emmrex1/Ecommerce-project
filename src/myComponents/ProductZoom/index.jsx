import React, { useState } from "react";

const ProductZoom = () => {
  const [mainImage, setMainImage] = useState(
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg"
  );

  const thumbnails = [
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg",
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-600x600.jpg",
    "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-600x600.jpg",
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
      <div className="main-image mb-3">
        <img
          src={mainImage}
          alt="Product Main"
          style={{ width: "90%", height: "300px", objectFit: "cover" }}
        />
      </div>
      <div
        className="thumbnails d-flex"
        style={{ overflowX: "auto", display: "flex", gap: "10px" }}
      >
        {thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(image)}
            style={{
              width: "80px",
              height: "80px",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductZoom;
