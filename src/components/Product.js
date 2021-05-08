import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>
            <CurrencyFormat
              decimalScale={2}
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
            />
          </strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=''></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
