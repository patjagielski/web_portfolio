import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({checkRole, isAuthenticated, component: Component}) => (
    <Route component={(props) => (
        isAuthenticated ? ( checkRole === "ADMIN" ? (
            <div>
                <Header />
            <Redirect to="/admin"/>
            </div>) : checkRole === "FREELANCER" ? (
                <div>
                    <Header />
                <Redirect to="/freelancer"/>
                </div>) : (
                    <div>
                        <Header />
                    <Redirect to="/recruiter"/>
                    </div>)) : (<Component {...props} />)  
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
    checkRole: state.auth.roleName
});

export default connect(mapStateToProps)(PublicRoute);

