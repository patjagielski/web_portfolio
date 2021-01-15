import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({isAuthenticated, component: Component}) => (
    <Route component={(props) => (
        isAuthenticated ? (<div>
            <Header />
            <Redirect to="/home"/>
            </div>) : (<Component {...props} />)
            
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);