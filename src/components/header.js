import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <Link className="header__logo" to="/dashboard">
                <img className="logo" src="/images/cw-apa-logo.jpg" alt="Central Wisconsin APA" />
            </Link>
            { props.isAuthenticated && 
            <button
                onClick={props.startLogout}
                className="button button--link">
                Logout
            </button> }
            <div className="show-for-desktop header__nav-links">
                <NavLink to="/events" activeClassName="is-active">Events</NavLink>
                <NavLink to="/news" activeClassName="is-active">News</NavLink>
                <NavLink to="/forms" activeClassName="is-active">Forms</NavLink>
                <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
            </div>
            <div className="show-for-mobile header__mobile-menu__button">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="header__nav-links header__mobile-menu">
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mappedComponent = connect(undefined, mapDispatchToProps)(Header);

export { Header, mappedComponent as default }