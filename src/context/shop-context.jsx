import { createContext, useState } from "react";
import { PRODUCTS } from "../components/products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [coupon, setCoupon] = useState({ code: '', discount: 0 });
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  const applyCoupon = (code) => {
    if (code === "SAVE20") {
      setCoupon({ code: code, discount: 20 }); // 20% discount
    } else {
      alert("Invalid coupon code");
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    if (coupon.discount > 0) {
      totalAmount -= (totalAmount * coupon.discount) / 100;
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
        const newCartItems = { ...prev, [itemId]: prev[itemId] + 1 };
        console.log("Updated Cart Items:", Object.keys(newCartItems)
            .filter(key => newCartItems[key] > 0) // Only include items with a count greater than 0
            .map(key => {
                const product = PRODUCTS.find(p => p.id === Number(key));
                return {
                    id: product.id,
                    name: product.productName,
                    count: newCartItems[key],
                    price: product.price
                };
            }));
        return newCartItems;
    });
};


const removeFromCart = (itemId) => {
  setCartItems((prev) => {
      const newCartItems = { ...prev, [itemId]: Math.max(0, prev[itemId] - 1) }; // Ensure count doesn't go below 0
      console.log("Updated Cart Items:", Object.keys(newCartItems)
          .filter(key => newCartItems[key] > 0) // Only include items with a count greater than 0
          .map(key => {
              const product = PRODUCTS.find(p => p.id === Number(key));
              return {
                  id: product.id,
                  name: product.productName,
                  count: newCartItems[key],
                  price: product.price
              };
          }));
      return newCartItems;
  });
};


  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    applyCoupon,
    searchTerm, // Include searchTerm in the context value
    setSearchTerm, // Function to update searchTerm
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
