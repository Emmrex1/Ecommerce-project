import React from "react";
import { Modal, Button } from "@mui/material";

const ProductQuickView = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-container p-6 bg-white rounded-md max-w-lg mx-auto mt-16">
        <h2 className="text-xl">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4"
        />
        <p>Price: Rs {product.price}</p>
        <p>{product.description}</p>
        <Button variant="contained" color="primary" className="mt-4">
          Add to Cart
        </Button>
      </div>
    </Modal>
  );
};

export default ProductQuickView;
