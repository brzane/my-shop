import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title:title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p id={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' className='product-image' />
      <button onClick={addToBasket} className="addtobasket-button">Add to Basket</button>
    </div>
  );
};
export default Product;
