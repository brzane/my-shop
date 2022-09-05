import React from "react";
import "./Home.css";
import Product from './Product'
const Home = () => {
  return (
    <div>
      <div className='home'>
        <div className='home-container'>
          <img
            src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg'
            alt=''
            className='home-image'
          />

          <div className='home-row'>
            <Product
              id='12321341'
              title='Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)'
              price={11.96}
              rating={5}
              image='https://qph.fs.quoracdn.net/main-qimg-0103a269ec0b49c0677608741b578a13-lq'
            />
            <Product
              id='49538094'
              title='IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)'
              price={239.0}
              rating={4}
              image='https://cdn.shopify.com/s/files/1/0507/2096/4799/products/81bTlOxnLlL._SL1500__Copy_600x.jpg?v=1608884525'
            />
          </div>

          <div className='home-row'>
            <Product
              id='4903850'
              title='All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback'
              price={199.99}
              rating={3}
              image='https://images.squarespace-cdn.com/content/v1/605b7322b806fb292a9defce/1617816625655-PUCD8T87L4YO2KZGMQPU/all-the-light-we-cannot-see_Anthony_Doerr.jpg'
            />
            <Product
              id='23445930'
              title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
              price={98.99}
              rating={5}
              image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product
              id='3254354345'
              title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
              price={598.99}
              rating={4}
              image='https://s13emagst.akamaized.net/products/36812/36811886/images/res_23ddb0f6793974472ef63cc3de347cfd.jpg'
            />
          </div>

          <div className='home-row'>
            <Product
              id='90829332'
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image='https://image-us.samsung.com/SamsungUS/home/92621/12062021/C49RG9_006_L-Perspective_Black.jpg?$product-details-jpg$'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
