import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/home-page';
import NotFoundPage from '../components/not-found-page';
import LoginPage from '../components/login-page';
import EventsPage from '../components/events-page';
import NewsPage from '../components/news-page';
import FormsPage from '../components/forms-page';
import ContactPage from '../components/contact-page';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={HomePage} exact={true} />
                <PublicRoute path="/events" component={EventsPage} />
                <PublicRoute path="/news" component={NewsPage} />
                <PublicRoute path="/forms" component={FormsPage} />
                <PublicRoute path="/contact" component={ContactPage} />
                <PrivateRoute path="/dashboard" component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;