import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../source/cart-context";
import "./Cart.css";
import { GoAlert } from "react-icons/go";
import { TiTick } from "react-icons/ti";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const removeItem = (data) => {
    ctx.removeFromCart(data);
  };
  if (ctx.totalQuantity < 1) {
    return (
      <Modal>
        <div className="div5">
          <h2 className="textcolor">Please Add Items to Cart</h2>
          <button onClick={props.onCartClose} className="removebtn">
            <GoAlert />
            Okay
          </button>
        </div>
      </Modal>
    );
  }
  return (
    <Modal>
      <div className="div1">
        <div className="div2">
          <ul>
            {ctx.cartItems.map((item) => {
              //console.log(item)
              return (
                <li className="li1 textcolor">
                  {item.title} ₹{item.price} x {item.quantity}
                  <button
                    className="removebtn "
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="div3 textcolor">
          <span>Total Amount</span>
          <span>₹{ctx.totalAmount}</span>
        </div>
        <div className="div4">
          <button onClick={props.onCartClose} className="removebtn">
            <GoAlert />
            Cancel
          </button>
          <button
            className="removebtn"
            onClick={() => {
              alert("Order Created Successfully");
              props.onCartClose();
            }}
          >
            <TiTick />
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(Cart);
