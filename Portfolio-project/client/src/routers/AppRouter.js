import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import AddDashboard from '../components/AddDashboard';
import EditDashboard from '../components/EditDashboard';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';
const createHistory = require("history");

export const history = createHistory.createHashHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <Route path='/home' component={Dashboard}/>
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contactme' component={ContactMe} />
                <Route path='/AddDashboard' component={AddDashboard}/>
                <Route path='/EditDashboard' component={EditDashboard}/>
                <Route component={NotFound} exact={true} />
            </Switch>
    </div>
    </Router>
);

export default AppRouter;