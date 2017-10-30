import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Header } from '../components/header';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        component={(props) => (
            isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
                <div>
                    <div className="show-for-desktop page-layout">
                        <div className="page-layout__right-side">
                            <Header />
                            <Component {...props} />
                        </div>
                    </div>
                    <div className="show-for-mobile page-layout">
                        <Header />
                        <div className="page-layout__right-side">
                            <Component {...props} />
                        </div>
                    </div>
                </div>
            )
        )}
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);