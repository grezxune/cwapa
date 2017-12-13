import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/home-page';
import NotFoundPage from '../components/not-found-page';
import EventsPage from '../components/events/events-page';
import NewsPage from '../components/news/news-page';
import FormsPage from '../components/forms-page';
import ContactPage from '../components/contact/contact-page';
import LoginPage from '../components/login-page';
import AdminPage from '../components/admin-page';
import PlayersListPage from '../components/players/players-list-page';
import PlayerForm from '../components/players/player-form';
import AddPlayerPage from '../components/players/add-player-page';
import EditPlayerPage from '../components/players/edit-player-page';
import TeamsListPage from '../components/teams/teams-list-page';

import AddNewsItemPage from '../components/news/add-news-item-page';

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
                <PublicRoute path="/login" component={LoginPage} />
                <PublicRoute path="/player/add" component={AddPlayerPage} />
                <PublicRoute path="/player/:id" component={EditPlayerPage} />
                
                <PrivateRoute path="/admin" component={AdminPage} />
                <PrivateRoute path="/players" component={PlayersListPage} />
                <PrivateRoute path="/teams" component={TeamsListPage} />
                <PrivateRoute path="/news-item/add" component={AddNewsItemPage} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;