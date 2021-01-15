import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {userAuthentication, login} from './actions/auth';

const store = configureStore();


/**
 * UNCOMMENT ONCE ALL OTHER PAGES ARE SET UP
 */

 
//If jwt token is valid --> move to dashboard page
//else keep them on the login page


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    , document.getElementById("app"));

