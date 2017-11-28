import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        component={(props) => (
            <div>
                <div className="page-layout">
                    <div className="page-layout__right-side">
                        <Header isAuthenticated={isAuthenticated} />
                        <Component {...props} />
                        <Footer />
                    </div>
                </div>
            </div>
        )}
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id
});

export default connect(mapStateToProps)(PublicRoute);