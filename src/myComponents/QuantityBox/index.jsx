import React, { useState } from "react";

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <button
        onClick={handleDecrement}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "lightgrey",
          fontSize: "24px",
          color: "#000",
          cursor: "pointer",
        }}
      >
        −
      </button>
      <span style={{ fontSize: "18px" }}>{quantity}</span>
      <button
        onClick={handleIncrement}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "lightgrey",
          fontSize: "24px",
          color: "#000",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityBox;
