import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{basket, user}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/32/br-events/2023/MD/onsite/0333_MD23_gridnarrow_flip1_1500x180.jpg"
          alt="ad-banner"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your cart</h2>
          
          {basket.map(item => (
            <CheckoutProduct
              key={item.id} 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
