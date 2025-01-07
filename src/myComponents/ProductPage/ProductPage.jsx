import React from "react";
import RelatedProduct from "../../pages/ProductDetails/RelatedProducts";



const ProductPage = ({ categoryId, subCategoryId }) => {
  return (
    <div className="product-page">
      {/* Other product details here */}
      <RelatedProduct categoryId={categoryId} subCategoryId={subCategoryId} />
    </div>
  );
};

export default ProductPage;
