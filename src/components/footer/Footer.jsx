import React from 'react';
import Currency from '../../assets/Currency.svg';
import Payment from '../../assets/Payment.svg';
import Social from '../../assets/Social.svg';

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-upper'>
        <div className='footer-content'>
          <h2>Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type='text' placeholder='Enter your e-mail...' />
            <button>subscribe</button>
          </form>
        </div>
        <div className='footer-content' >
          <h2>Contact Us</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>Currency</h2>
          <div>
            <img src={Currency} alt='currency' />
          </div>
          <span>Transactions will be completed in Euros and a currency reference is available on hover.</span>
        </div>

      </div>
      <hr />
      <div className='footer-lower'>
        <div>
          <h2>mettā muse</h2>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
          <p>Join as a Seller</p>
        </div>
        <div>
          <h2>Quick Links</h2>

          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>

        </div>
        <div>
          <h2>Follow Us</h2>
          <img src={Social} alt="social" />
          <h5>mettā muse Accepts</h5>
          <img src={Payment} alt='payment' />
        </div>
      </div>
      <div className='copyright'>
        <span>Copyright © 2023 mettamuse. All rights reserved.</span>
      </div>
    </div>
  )
}

export default footer