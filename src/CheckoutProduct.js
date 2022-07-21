import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating}) {
    const[{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        //remove an item from basket
        dispatch({
            type: 'REMOVE FROM BASKET',
            id: id,
        })
    }


    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt="" />
            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                     <small>$</small>
                     <strong>{price}</strong>
                </p>
                <div className = "checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
