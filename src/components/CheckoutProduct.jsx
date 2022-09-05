import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img src={image} alt='' className='checkoutProduct-image' />

      <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct-rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p id={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="remove-button">Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
