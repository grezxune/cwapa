import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './nav-links';

class Header extends React.Component {
    toggleMobileMenu = () => {
        const mobileMenu = document.querySelector('.header__mobile-menu');

        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    }

    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <Link className="header__logo" to="/">
                        <img className="logo" src="/images/cw-apa-logo.jpg" alt="Central Wisconsin APA" />
                    </Link>

                    <div className="show-for-desktop header__nav-links">
                        <NavLinks isAuthenticated={this.props.isAuthenticated} />
                    </div>

                    <div className="show-for-mobile">
                        <button className="header__mobile-menu__button" onClick={this.toggleMobileMenu}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        <div className="header__nav-links header__mobile-menu">
                            <NavLinks isAuthenticated={this.props.isAuthenticated} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;