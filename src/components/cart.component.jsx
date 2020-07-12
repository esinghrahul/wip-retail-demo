import React, { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { CartButton } from "./button.component";

const CartItem = ({ cartItem }) => {
  const { title, img, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <div className="card mb-3 border-0 py-2 px-2">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-10">
          <div className="d-flex justify-content-around">
            <h5>{title}</h5>
            <span className="d-flex">
              <div
                className="d-flex justify-content-center arrow"
                onClick={() => removeItem(cartItem)}
              >
                &#10094;
              </div>
              <span>{quantity}</span>
              <div className="arrow" onClick={() => addItem(cartItem)}>
                &#10095;
              </div>
            </span>
            <span>{price}</span>
            <p className="card-text d-flex justify-content-end">
              <CartButton
              onClick={() => clearItemFromCart(cartItem)}
              >
                <span className="badge badge-pill badge-danger">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CartButton>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;


