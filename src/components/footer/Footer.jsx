import React, { useState } from 'react';
import Currency from '../../assets/Currency.svg';
import Payment from '../../assets/Payment.svg';
import Social from '../../assets/Social.svg';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Footer = () => {

  const [toggle, setToggle] = useState({metta:false, quick: false, follow:false});
  return (
    <>
      <div className='footer footer-lg'>
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


      {/* mobile view filter start from here */}


      <div className='footer footer-xs'>
        <div className='mobile-view' >
          <h2>Be the first to know</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type='text' placeholder='Enter your e-mail...' />
            <button>subscribe</button>
          </form>
        </div>
        <hr />
        <div className='mobile-view'>
          <h2>Call Us</h2>
          <p>+44 221 133 5360 ◆ ustomercare@mettamuse.com</p>
        </div>
        <hr />
        <div className='mobile-view'>
          <h2>Currency</h2>
          <div>
            <img src={Currency} alt='currency' />
          </div>
        </div>
        <hr />

        <div className='footer-toggle mobile-view' onClick={()=>setToggle({...toggle, metta: !toggle.metta})}>
          <h2>mettā muse</h2>
          <HiOutlineChevronDown />
        </div>
        {toggle.metta && <div>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
          <p>Join as a Seller</p>
        </div>}
        <hr />
        <div className='footer-toggle mobile-view' onClick={()=>setToggle({...toggle, quick: !toggle.quick})}>
          <h2>Quick Links</h2>
          <HiOutlineChevronDown />
        </div>
        {toggle.quick && <div>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>}
        <hr />
        <div className='footer-toggle' onClick={()=>setToggle({...toggle, follow: !toggle.follow})}>
          <h2>Follow Us</h2>
          <HiOutlineChevronDown />
        </div>
        {toggle.follow && <div>
          <img src={Social} alt="social" />
          <h5>mettā muse Accepts</h5>
          <img src={Payment} alt='payment' />
        </div>}
        <div className='copyright'>
          <span>Copyright © 2023 mettamuse. All rights reserved.</span>
        </div>
      </div>
    </>
  )
}

export default Footer