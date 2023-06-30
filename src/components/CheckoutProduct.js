import React from 'react'
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    // eslint-disable-next-line
    const [{}, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        //remove o item do carrinho
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
  return (
    <div className='checkoutProduct' key={id}>
        <img className='checkoutProduct__image' src={image} alt=''
        />
        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>
                {title}
            </p>
            <p className='checkoutProduct__price'>
                <small>R$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟</p>
                ))}
            </div>
            {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>
    </div>
  )
}

export default CheckoutProduct;