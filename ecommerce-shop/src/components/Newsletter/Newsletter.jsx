import React from 'react';
import "./Newsletter.scss";

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="wrapper">
            <span>Subscribe to Our Newsletter</span>
            <div className="email">
                <input type="email" placeholder='Email address' aria-label="Email address" />
                <button aria-label="Subscribe">Subscribe</button>
            </div>
        </div>
    </div>
  );
};

export default Newsletter;
