import React from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const CART_DATA = [
    {
      id: 'c1',
      name: 'Sushi',
      amount: 2,
      price: 12.99,
    },
  ];

  const cartItems = (
    <ul className={classes['cart-items']}>
      {CART_DATA.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes['button--alt']}
            onClick={props.onClose}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
