import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
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
import ResourcesPage from '../components/resources/resources-page';
import NewsFeed from '../components/news-feed/news-feed';

import AddUserPage from '../components/users/add-user-page';
import AddNewsItemPage from '../components/news/add-news-item-page';

import PrivateRoute from './private-route';
import PublicRoute from './public-route';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route
                    path="*"
                    component={() =>
                        (window.location = 'https://league.poolplayers.com/cwi')
                    }
                />
                <PublicRoute
                    path="/"
                    component={HomePage}
                    rightPanel={NewsFeed}
                    exact={true}
                />
                <PublicRoute
                    path="/events"
                    component={EventsPage}
                    rightPanel={NewsFeed}
                />
                <PublicRoute
                    path="/news"
                    component={NewsPage}
                    rightPanel={NewsFeed}
                />
                <PublicRoute
                    path="/forms"
                    component={FormsPage}
                    rightPanel={NewsFeed}
                />
                <PublicRoute
                    path="/contact"
                    component={ContactPage}
                    rightPanel={NewsFeed}
                />
                <PublicRoute
                    path="/login"
                    component={LoginPage}
                    rightPanel={NewsFeed}
                />
                <PublicRoute
                    path="/player/add"
                    component={AddPlayerPage}
                    rightPanel={NewsFeed}
                />
                <PublicRoute
                    path="/player/:id"
                    component={EditPlayerPage}
                    rightPanel={NewsFeed}
                />
                <PublicRoute
                    path="/resources"
                    component={ResourcesPage}
                    rightPanel={NewsFeed}
                />

                <PrivateRoute
                    path="/admin"
                    component={AdminPage}
                    rightPanel={NewsFeed}
                />
                <PrivateRoute
                    path="/players"
                    component={PlayersListPage}
                    rightPanel={NewsFeed}
                />
                <PrivateRoute
                    path="/teams"
                    component={TeamsListPage}
                    rightPanel={NewsFeed}
                />
                <PrivateRoute
                    path="/news-item/add"
                    component={AddNewsItemPage}
                    rightPanel={NewsFeed}
                />
                <PrivateRoute
                    path="/users/add"
                    component={AddUserPage}
                    rightPanel={NewsFeed}
                />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
