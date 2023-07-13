import React from "react";

const CartContext = React.createContext({
cartItems : [] ,
totalQuantity : Number ,
totalAmount : Number
});

export default CartContext;
