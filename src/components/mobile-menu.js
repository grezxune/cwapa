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
            <div className="show-for-mobile">
                <div
                    className={this.props.classes.mobileMenu}
                    style={{
                        left: this.state.mobileMenuVisible ? '50vw' : '100vw'
                    }}
                >
                    <NavLinks
                        className={this.props.classes.mobileMenu}
                        isAuthenticated={this.props.isAuthenticated}
                    />
                    <i
                        className={`fa fa-bars ${
                            this.props.classes.mobileMenuButton
                        }`}
                        aria-hidden="true"
                        onClick={this.toggleMobileMenu}
                    />
                </div>
                <i
                    className={`fa fa-bars ${
                        this.props.classes.mobileMenuButton
                    }`}
                    aria-hidden="true"
                    onClick={this.toggleMobileMenu}
                />
            </div>
        );
    }
}

const styles = theme => ({
    mobileMenu: {
        position: 'fixed',
        left: '100vw',
        top: '0',
        transition: 'left .75s',
        width: '50vw',
        background: Variables.mainColor,
        display: 'flex',
        justifyContent: 'space-between',
        padding: Variables.mSize,
        height: '100vh',
        border: '1px solid white'
    },
    mobileMenuButton: {
        cursor: 'pointer',
        fontSize: Variables.fontSizeXLarge
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
