import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter  from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadLiterals} from './redux/literals';
import loadLang from './i18n/index';

const store = configureStore();
const lang = loadLang();
store.dispatch(loadLiterals(lang));

 
//If jwt token is valid --> move to dashboard page
//else keep them on the login page


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    , document.getElementById("app"));

