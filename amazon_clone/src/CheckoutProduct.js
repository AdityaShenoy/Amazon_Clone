import React from "react"
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider"

function CheckoutProduct({ id, title, image, rating, price }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div class="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button
                    onClick={removeFromBasket}
                    className="checkoutProduct__button"
                >
                    Remove from Basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
