import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import customAxios from '../network/axios';
import { history } from '../routers/app-router';
import { logout } from '../actions/auth';
import PrivateComponent from './private-component';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

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

    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <Link className="header__logo" to="/">
                        <img className="logo" src="/images/cw-apa-logo.jpg" alt="Central Wisconsin APA" />
                    </Link>
                    <div className="show-for-desktop header__nav-links">
                        <NavLink to="/events" activeClassName="is-active" className="header__nav-link">Events</NavLink>
                        <NavLink to="/news" activeClassName="is-active" className="header__nav-link">News</NavLink>
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
                    <div className="show-for-mobile header__mobile-menu__button">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div className="header__nav-links header__mobile-menu">
                    </div>
                </div>
            </header>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id
});

const mappedComponent = connect(mapStateToProps, mapDispatchToProps)(Header);

export { Header, mappedComponent as default }