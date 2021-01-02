import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import NotFound from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <Route path='/home' component={Dashboard}/>
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contactme' component={ContactMe} />
                <Route component={NotFound} exact={true} />
            </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;