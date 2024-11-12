import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Field Roast Chao Cheese Creamy Original",
      price: 7.25,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Field Roast Chao Cheese Creamy Original",
      price: 7.25,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Field Roast Chao Cheese Creamy Original",
      price: 7.25,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-7xl mx-auto">
      <div className="w-full lg:w-3/4">
        <h2 className="text-2xl font-bold mb-2">Your Cart</h2>
        <p className="text-gray-600 mb-4">
          There are {cartItems.length} products in your cart
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-sm md:text-base">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-right">Unit Price</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-right">Subtotal</th>
                <th className="p-3 text-right">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b text-sm md:text-base">
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-yellow-500 text-sm">★★★★★</p>
                    </div>
                  </td>
                  <td className="p-3 text-right">${item.price.toFixed(2)}</td>
                  <td className="p-3 text-center flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-3 py-1 bg-gray-200 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-3 py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-3 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full lg:w-1/4">
        <div className="bg-white p-4 border rounded-lg">
          <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className="text-green-600 font-semibold">Free</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Estimate for</span>
            <span>United Kingdom</span>
          </div>
          <div className="flex justify-between mb-4 text-xl font-bold">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
