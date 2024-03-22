import React from 'react';
import Logo from '../../assets/Logo.svg';
import Lorem from '../../assets/Lorem.svg';
import Heart from '../../assets/Heart.svg';
import Search from '../../assets/Search.svg';
import Shopping from '../../assets/Shopping.svg';
import Language from '../../assets/Language.svg';
import Profile from '../../assets/Profile.svg';
import Menu from '../../assets/Menu.svg';

const Navbar = () => {
    return (
        <>

            <div className='navbar nav-lg'>
                <div className='nav-content upper-container'>
                    <span><img src={Lorem} alt='lorem' /></span>
                    <span><img src={Lorem} alt='lorem' /></span>
                    <span><img src={Lorem} alt='lorem' /></span>
                </div>
                <div className='nav-content middle-container'>
                    <div className='logo-img'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <div className='nav-heading'>
                        <h1>LOGO</h1>
                    </div>
                    <ul className='nav-list'>
                        <li><img src={Search} alt='Search' /></li>
                        <li><img src={Heart} alt='Heart' /></li>
                        <li><img src={Shopping} alt='Shopping' /></li>
                        <li><img src={Profile} alt='Profile' /></li>
                        <li><img src={Language} alt='Language' /></li>
                    </ul>
                </div>
                <div>
                    <ul className='lower-container'>
                        <li>SHOP</li>
                        <li>SKILLS</li>
                        <li>STORIES</li>
                        <li>ABOUT</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>

            {/* moblie navbar start from here  */}

            <div className='navbar nav-xs'>
                <div className='nav-content upper-container'>
                    <span><img src={Lorem} alt='lorem' /></span>
                </div>
                <div className='nav-content middle-container'>
                    <div className='logo-img'>
                        <img src={Menu} alt='menu' />
                        <img src={Logo} alt='Logo' />
                    </div>
                    <div className='nav-heading'>
                        <h1>LOGO</h1>
                    </div>
                    <ul className='nav-list'>
                        <li><img src={Search} alt='Search' /></li>
                        <li><img src={Heart} alt='Heart' /></li>
                        <li><img src={Shopping} alt='Shopping' /></li>
                    </ul>
                </div>
            </div>
            <div className='nav-bottom'>
                <span>Home</span>  |  <span>Shop</span>
            </div>
        </>
    )
}

export default Navbar