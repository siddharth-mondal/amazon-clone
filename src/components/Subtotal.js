import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getTotalPrice } from '../reducer';

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{` ${value} `}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType={'text'}
        thousandSeparator={true}
        thousandSpacing={'2s'}
        prefix={'₹'}
      />

      <button>Procced to checkout</button>
    </div>
  );
}

export default Subtotal;
