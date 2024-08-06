import React from 'react';
import "./Cart.scss";
import Overlay from '../Overlay/Overlay';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import makeRequest from '../../makeRequest';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = ({ active, handleCartToggle }) => {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = () => {
    return products.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  // Stripe promise for loading Stripe
  const stripePromise = loadStripe('pk_test_51PMX8nKJVK5gFCbJBJHcMPzogkqdOxqgizKZfJO70NkiwEjBSzrBK9z5DoFDhSCcHyCczqixZxQ8o1xtqz9GYhU300t9Krp5Bu');

  // Handle payment function
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      if (!stripe) {
        console.error('Stripe failed to load');
        return;
      }

      const res = await makeRequest.post('/orders', { products });

      if (!res.data || !res.data.stripeSession) {
        console.error('Invalid response from server:', res);
        return;
      }

      const { id } = res.data.stripeSession;

      const result = await stripe.redirectToCheckout({ sessionId: id });

      if (result.error) {
        console.error('Stripe checkout error:', result.error.message);
      }
    } catch (err) {
      console.error('Payment error:', err);
    }
  };

  // Handle closing the cart
  const handleCloseCart = () => {
    handleCartToggle(); // Toggle the cart state to close it
  };

  return (
    <>
      <div className={`cart ${active ? 'active' : ''}`}>
        <div className="wrapper">
          <div className="cart-header">
            <h1>Shopping Bag</h1>
            <div className='closeIcon' onClick={handleCloseCart} role="button" aria-label="Close Cart">
              <CloseIcon />
            </div>
          </div>
          <div className="items-container">
            {products?.map(item => (
              <div className='item' key={item.id}>
                <div className='img-container'>
                  <img src={item.img} alt={`${item.title} Image`} />
                </div>
                <div className="details">
                  <div className="details-container">
                    <h2>{item.title}</h2>
                    <div className="selected-details">
                      <p>{item.size} | {item.color}</p>
                    </div>
                    <p>{item.desc?.substring(0, 100)}...</p>
                    <div className='sub-container'>
                      <div className="price">{item.quantity} x ${item.price}</div>
                      <button className="delete-mobile" onClick={() => dispatch(removeItem({ id: item.id, size: item.size, color: item.color }))}>
                        Remove <DeleteOutlineIcon />
                      </button>
                    </div>
                  </div>
                  <button className="delete" onClick={() => dispatch(removeItem({ id: item.id, size: item.size, color: item.color }))}>
                    Remove <DeleteOutlineIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-container">
            <div className="total">
              <span>Subtotal</span>
              <span>${totalPrice()}</span>
            </div>
            <button className="checkout-btn" onClick={handlePayment}>Proceed to Checkout</button>
            <span className="reset" onClick={() => dispatch(resetCart())} role="button" aria-label="Remove All">REMOVE ALL</span>
          </div>
        </div>
      </div>
      <Overlay active={active} onClick={handleCloseCart} />
    </>
  );
};

export default Cart;
