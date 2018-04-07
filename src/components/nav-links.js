import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';

import { history } from '../routers/app-router';
import { logout } from '../actions/auth';
import customAxios from '../network/axios';
import Variables from '../styles/jss/variables';

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
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.header}>
                <NavLink
                    to="/"
                    activeClassName="is-active"
                    className="header__nav-link"
                    exact={true}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/player/add"
                    activeClassName="is-active"
                    className="header__nav-link"
                    exact={true}
                >
                    Join Us!
                </NavLink>
                <NavLink
                    to="/events"
                    activeClassName="is-active"
                    className="header__nav-link"
                >
                    Events
                </NavLink>
                {false && (
                    <NavLink
                        to="/news"
                        activeClassName="is-active"
                        className="header__nav-link"
                    >
                        News
                    </NavLink>
                )}
                <NavLink
                    to="/resources"
                    activeClassName="is-active"
                    className="header__nav-link"
                >
                    Resources
                </NavLink>
                <NavLink
                    to="/forms"
                    activeClassName="is-active"
                    className="header__nav-link"
                >
                    Forms
                </NavLink>
                <NavLink
                    to="/contact"
                    activeClassName="is-active"
                    className="header__nav-link"
                >
                    Contact
                </NavLink>
                {this.props.isAuthenticated && (
                    <NavLink
                        to="/admin"
                        activeClassName="is-active"
                        className="header__nav-link"
                    >
                        Admin
                    </NavLink>
                )}
                {this.props.isAuthenticated && (
                    <a className="header__nav-link" onClick={this.logoutUser}>
                        Logout
                    </a>
                )}
                {!this.props.isAuthenticated &&
                    false && (
                        <NavLink
                            to="/login"
                            activeClassName="is-active"
                            className="header__nav-link"
                        >
                            Login
                        </NavLink>
                    )}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.id
});

const mappedComponent = connect(mapStateToProps, mapDispatchToProps)(NavLinks);

const styles = theme => ({
    header: {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        alignItems: 'flex-start'
    }
});

const styledComponent = injectSheet(styles)(mappedComponent);

export { NavLinks, styledComponent as default };

// <button
//     className="hidden show-for-mobile header__mobile-menu__button"
//     onClick={this.toggleMobileMenu}
// >
//     <i className="fa fa-bars" aria-hidden="true" />
// </button>
