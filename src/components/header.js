import React from 'react';
import { Link } from 'react-router-dom';

import DesktopMenu from './desktop-menu';

class Header extends React.Component {
    render() {
        return (
            <div className="left-panel">
                <DesktopMenu />
            </div>
        );
    }
}

export default Header;

// <NavLinks
//     className="show-for-desktop left-panel"
//     isAuthenticated={this.props.isAuthenticated}
// />

// <div className="hidden">
//     <button
//         className="header__mobile-menu__button"
//         onClick={this.toggleMobileMenu}
//     >
//         <i className="fa fa-bars" aria-hidden="true" />
//     </button>
//     <div className="header__nav-links header__mobile-menu" />
// </div>
