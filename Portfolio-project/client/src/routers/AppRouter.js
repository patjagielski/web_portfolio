import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import FreeLancerDashboard from '../components/FreeLancerDashboard';
import AdminDashboard from '../components/AdminDashboard';
import RecruiterDashboard from '../components/RecruiterDashboard';
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
                <PrivateRoute path='/freelancer' component={FreeLancerDashboard}/>
                <PrivateRoute path='/admin' component={AdminDashboard}/>
                <PrivateRoute path='/recruiter' component={RecruiterDashboard}/>
                <PrivateRoute path='/portfolio' component={Portfolio} />
                <PrivateRoute path='/contactme' component={ContactMe} />
                <PrivateRoute path='/AddDashboard' component={AddDashboard}/>
                <PrivateRoute path='/EditDashboard' component={EditDashboard}/>
                <PrivateRoute component={NotFound} exact={true} />
            </Switch>
    </div>
    </Router>
);

export default AppRouter;