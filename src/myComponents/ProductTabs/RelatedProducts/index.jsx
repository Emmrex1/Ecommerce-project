import { ProductView } from "@/myComponents/ProductView";

const RelatedProduct = (props) => {
  return (
    <div className="w-full sm:w-2/3 md:w-2/8 d-flex  lg:w-2/8 mx-auto p-4">
      <ProductView />
    </div>
  );
};

export default RelatedProduct;
