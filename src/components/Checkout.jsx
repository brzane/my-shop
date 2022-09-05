import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          src='https://thumbs.dreamstime.com/b/horizontal-ad-banner-ready-web-sites-press-as-discount-advertisement-flyer-contains-black-friday-sale-black-friday-sale-103627128.jpg'
          alt=''
          className='checkout-ad'
        />
        <div className=''>
          <h2 className='checkout-title'>Your Shopping Basket:</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
