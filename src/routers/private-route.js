import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route
    {...rest}
    component={(props) => (
        isAuthenticated ? (
            <div className="page-layout">
                <div className="page-layout__right-side">
                    <Header />
                    <Component {...props} />
                    <Footer />
                </div>
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id
});

export default connect(mapStateToProps)(PrivateRoute);