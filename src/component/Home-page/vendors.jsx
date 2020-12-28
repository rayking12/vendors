import React from 'react'
import { HeaderStyled } from './vendors-styled'

const Header = () => {
    return (
        <HeaderStyled>
            <div className="Cart">
                <a href="/">
                    <img src="/img/cart.png" alt="cart icon" />
                </a>
            </div>
            <div className="Brand">
                <a href="/">                    <img src="/img/logo.svg" alt="3reenshop logo" />

                </a>
            </div>
            <ul className="NavItems">
                <li>
                    <a href="/">
                        <a className="active">Home</a>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <a>Store</a>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <a>Login</a>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <a>Sign Up</a>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <a>Contact Us</a>
                    </a>
                </li>
            </ul>
            <div className="Hamburger">
                <a href="/">
                    <img src="/img/hamburger.png" alt="menu icon" />
                </a>
            </div>
        </HeaderStyled>
    );
};

export default Header;

