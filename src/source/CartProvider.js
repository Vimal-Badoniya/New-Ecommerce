import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.cartItems.findIndex((item) => {
      return item.title === action.item.title;
    });
    const existingItem = state.cartItems[existingItemIndex];
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const updatedTtotalQuantity = state.totalQuantity + 1;
    if (existingItem) {
      const updatedExistingItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex] = updatedExistingItem;
      return {
        cartItems: updatedCartItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTtotalQuantity,
      };
    }
    const updatedCartItems = state.cartItems.concat(action.item);
    return {
      cartItems: updatedCartItems,
      totalAmount: updatedTotalAmount,
      totalQuantity: updatedTtotalQuantity,
    };
  }
  if (action.type === "REMOVE") {
    console.log("return block");
    const existingItemIndex = state.cartItems.findIndex((item) => {
      return item.title === action.item.title;
    });
    const existingItem = state.cartItems[existingItemIndex];
    const updatedExistingItem = {
      ...existingItem,
      quantity: existingItem.quantity - 1,
    };
    const updatedCartItems = [...state.cartItems];
    updatedCartItems[existingItemIndex] = updatedExistingItem;
    const updatedTotalAmount = state.totalAmount - action.item.price;
    const updatedTtotalQuantity = state.totalQuantity - 1;
    if (existingItem.quantity === 1) {
      const updatedCartItems = state.cartItems.filter((item) => {
        return item.title !== action.item.title;
      });
      return {
        cartItems: updatedCartItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTtotalQuantity,
      };
    }
    return {
      cartItems: updatedCartItems,
      totalAmount: updatedTotalAmount,
      totalQuantity: updatedTtotalQuantity,
    };
  }
  return initialCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    initialCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };
  const contextObj = {
    cartItems: cartState.cartItems,
    totalQuantity: cartState.totalQuantity,
    totalAmount: cartState.totalAmount,
    addToCart: addItemToCartHandler,
    removeFromCart: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={contextObj}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
