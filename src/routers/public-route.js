import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Logo from '../components/logo';
import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer';
import AdPanel from '../components/ad-panel/ad-panel';
import FacebookPanel from '../components/facebook-panel';

export const PublicRoute = ({
    isAuthenticated,
    component: Content,
    rightPanel: RightPanel,
    ...rest
}) => (
    <Route
        {...rest}
        component={props => (
            <div className="page-layout">
                <Logo />
                <Banner />
                <Header isAuthenticated={isAuthenticated} />
                <FacebookPanel />
                <AdPanel />
                <Content {...props} />
                <RightPanel />
                <Footer />
            </div>
        )}
    />
);

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.id
});

export default connect(mapStateToProps)(PublicRoute);
