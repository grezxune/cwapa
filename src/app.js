import './config/config';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-datepicker/dist/react-datepicker.css';

import AppRouter, { history } from './routers/app-router';
import configureStore from './store/configure-store';
import { login, logout } from './actions/auth';
import LoadingPage from './components/loading-page';
import customAxios from './network/axios';
import checkIfLoggedIn from './authorization/check-if-logged-in';

// import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <div>
        <ToastContainer />
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
};

ReactDOM.render(
    <LoadingPage />,
    document.getElementById('app')
);

const checkForUser = async () => {
    const payload = await checkIfLoggedIn();

    if (payload.loggedIn) {
        store.dispatch(login(payload.id));
    } else {
        store.dispatch(logout());
    }

    renderApp();
}

checkForUser();

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         store.dispatch(login(user.uid));
//         renderApp();
//         if (history.location.pathname === '/') {
//             history.push('/dashboard');
//         }
//     } else {
//         store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// });