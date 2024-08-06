import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { resetCart } from '../../redux/cartReducer';
import './Success.scss';

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear the cart when this component mounts    
    dispatch(resetCart());
  }, [dispatch]);

  return (
    <div className="success-page">
      <ShoppingBagIcon className="icon" style={{ fontSize: 80 }} aria-label="Shopping Bag Icon" />
      <h1>ORDER CONFIRMED!</h1>
      <p>Your order has been successfully processed and will ship ASAP.</p>
      <p>An order confirmation has been sent to your email address.</p>
      <p>If you have any questions, please contact our support team.</p>
      <Link to="/" className="home-button" aria-label="Continue Browsing Button">
        Continue Browsing
      </Link>
    </div>
  );
};

export default Success;
