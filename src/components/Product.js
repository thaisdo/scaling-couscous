import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ productkey, id, title, image, price, rating }) {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch ({
      type: "ADD_TO_BASKET",
      item: {
        key: productkey,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Adicionar ao carrinho</button>
    </div>
  );
}

export default Product;
