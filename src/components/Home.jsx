import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = ({ products }) => {
  return (
    <div>
      {console.log(products)}
      <div className='home'>
        <div className='home-container'>
          <img
            src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg'
            alt=''
            className='home-image'
          />
          <div className='products'>
            {products.map((product) => {
              console.log("hi");
              return (
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={5}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
