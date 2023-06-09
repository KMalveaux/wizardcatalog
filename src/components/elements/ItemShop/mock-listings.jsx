import React, { useContext } from "react";
import { ShopContext } from "./Shop-context";

export const MockItems = (props) => {
  const { id, itemName, itemPrice, itemImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="mockItem">
      <button><img src={itemImage} alt="Item Pic" onClick={() => window.location.href='/ProductPage'} /></button>
      <div className="description">
        <p className="item-name">
          <b>{itemName}</b>
        </p>
        <p className="item-price"> ${itemPrice}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};