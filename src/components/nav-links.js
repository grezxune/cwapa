import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { history } from '../routers/app-router';
import { logout } from '../actions/auth';
import customAxios from '../network/axios';

class NavLinks extends React.Component {
    logoutUser = async () => {
        try {
            const logoutResponse = await customAxios.post('/logout');

            if (logoutResponse && logoutResponse.status === 200) {
                this.props.logout();
                history.push('/');
            }
        } catch (err) {
            console.log('Error logging user out', err);
        }
    };

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
            <div className="header__nav-links__container">
                <div className="header__nav-links">
                    <NavLink to="/events" activeClassName="is-active" className="header__nav-link">Events</NavLink>
                    { false && <NavLink to="/news" activeClassName="is-active" className="header__nav-link">News</NavLink> }
                    <NavLink to="/resources" activeClassName="is-active" className="header__nav-link">Resources</NavLink>
                    <NavLink to="/forms" activeClassName="is-active" className="header__nav-link">Forms</NavLink>
                    <NavLink to="/contact" activeClassName="is-active" className="header__nav-link">Contact</NavLink>
                    { this.props.isAuthenticated && (
                            <NavLink to="/admin" activeClassName="is-active" className="header__nav-link">Admin</NavLink>
                        )
                    }
                    { this.props.isAuthenticated && (
                            <a className="header__nav-link" onClick={this.logoutUser}>Logout</a>
                        )
                    }
                    { !this.props.isAuthenticated && (
                            <NavLink to="/login" activeClassName="is-active" className="header__nav-link">Login</NavLink>
                        )
                    }
                </div>

                <button className="show-for-mobile header__mobile-menu__button" onClick={this.toggleMobileMenu}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id
});

const mappedComponent = connect(mapStateToProps, mapDispatchToProps)(NavLinks);

export { NavLinks, mappedComponent as default };