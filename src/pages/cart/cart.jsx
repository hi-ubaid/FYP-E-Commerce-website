// Modify your Cart component (cart.jsx) to include the following:

import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../components/products.js";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const totalAmount = getTotalCartAmount();
  const { applyCoupon } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== "") {
      // Assume 'applyCoupon' function verifies and applies the coupon
      applyCoupon(couponCode);
      setAppliedCoupon(couponCode);
      setCouponCode(""); // Clear input after applying
    }
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem key={product.id} data={product} />;
        }
      })}

        <div className="input-container">
          <input
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Coupon Code"
          />
          <button onClick={handleApplyCoupon}>Apply Coupon</button>
        </div>
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: Rs. {totalAmount} </p>
          <p>{appliedCoupon && `Coupon '${appliedCoupon}' applied successfully!`}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
          
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
