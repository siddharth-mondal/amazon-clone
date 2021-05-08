import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_JPN._CB670768292_.jpg'
        alt='Banner'></img>

      <div className='home__row'>
        <Product
          id='12345'
          title='OPPO F19 Pro (Crystal Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers'
          price={21490}
          rating={4}
          image='https://m.media-amazon.com/images/I/71KlQWpei4L._AC_UL320_.jpg'
        />
        <Product
          id='38464'
          title='Mi Smart Band 4 0.94-inch AMOLED Color Display, 20 Days Battery Life, Unlimited Watch Faces, 5ATM Water Resistant, Music Control'
          price={2099}
          rating={4}
          image='https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_UY218_.jpg'
        />
      </div>
      <div className='home__secondaryRow home__row'>
        <Product
          id='36485'
          title='All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (White)'
          price={4499}
          rating={5}
          image='https://m.media-amazon.com/images/I/61JhG2HKMCL._AC_UY218_.jpg'
        />
        <Product
          id='96848'
          title='Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)'
          price={20701}
          rating={5}
          image='https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UY218_.jpg'
        />
        <Product
          id='67683'
          title='Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard) - Space Grey'
          price={99990}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SL1500_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
