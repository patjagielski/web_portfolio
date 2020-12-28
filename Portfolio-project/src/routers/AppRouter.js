import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import NotFound from '../components/NotFound';
import Item1 from '../components/Item1';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/portfolio/:id' component={Item1} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contactme' component={ContactMe} />
                <Route component={NotFound} exact={true} />
            </Switch>
    </div>
    
    </BrowserRouter>
);

export default AppRouter;