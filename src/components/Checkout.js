import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/32/br-events/2023/MD/onsite/0333_MD23_gridnarrow_flip1_1500x180.jpg"
          alt="ad-banner"
        />

        <div>
          <h2 className="checkout__title">Seu carrinho</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
