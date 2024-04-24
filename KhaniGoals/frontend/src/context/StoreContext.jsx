import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Food list ko count ko lagi
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemID) => {
    // cartitems first time click garda itemID unavailable hunxa, so
    if (!cartItems[itemID]) {
      setCartItems((prev) => ({ ...prev, [itemID]: 1 })); // itemID define garerw value set to 1, if not found
    } else {
      setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 })); // if found, increment by 1
    }
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 })); // decrement by 1
  };

  // cart ko lagi total subtbotal haru nikalna lai
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // for in loop lagako cuz cartItems is object
    for (const item in cartItems) {
        // if item is available in the cart vane value greater than 0 hunai paryo tyo key ko
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item); // this product is available in the cart
        totalAmount += itemInfo.price * cartItems[item]; // total amount = unit price * quantity
        // cartItems is an object where each key is an itemID and the corresponding value is the quantity of that item in the cart. tei vara chahi aba cartItems[item] garda kheri specific key 'item' ko value aaucha, jun le chahi tyo key 'item' ko quantity dinivo
      }
    }

    return totalAmount;
  };

  // cartItems update huda log garna lai
  // useEffect(() => {
  //     console.log(cartItems);

  // }, [cartItems]);

  // yesko vitra vako any element chahi aru jun component maa ni use garna milni vo
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
