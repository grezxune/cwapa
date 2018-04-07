import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';

import Variables from '../styles/jss/variables';
import { logout } from '../actions/auth';
import NavLinks from './nav-links';

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuVisible: false
        };
    }

    toggleMobileMenu = () => {
        this.setState(prevState => {
            return {
                mobileMenuVisible: !prevState.mobileMenuVisible
            };
        });
    };

    render() {
        return (
            <div className="show-for-desktop">
                <NavLinks
                    className={this.props.classes.desktopMenu}
                    isAuthenticated={this.props.isAuthenticated}
                />
            </div>
        );
    }
}

const styles = theme => ({
    desktopMenu: {
        position: 'fixed',
        left: '100vw',
        top: '0',
        transition: 'left 1s',
        width: '50vw',
        background: 'black'
    }
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.id
});

const MappedMobileMenu = connect(mapStateToProps, mapDispatchToProps)(
    MobileMenu
);
const StyledMobileMenu = injectSheet(styles)(MappedMobileMenu);

export { StyledMobileMenu as default, MobileMenu };
