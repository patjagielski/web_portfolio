import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import FreeLancerHeader from '../components/FreeLancerHeader';
import RecruiterHeader from '../components/RecruiterHeader';

export const PublicRoute = ({checkRole, isAuthenticated, component: Component}) => (
    <Route component={(props) => (
        isAuthenticated ? ( checkRole === "ADMIN" ? (
            <div>
                <AdminHeader />
            <Redirect to="/admin"/>
            </div>) : checkRole === "FREELANCER" ? (
                <div>
                    <FreeLancerHeader />
                <Redirect to="/freelancer"/>
                </div>) : (
                    <div>
                        <RecruiterHeader />
                    <Redirect to="/recruiter"/>
                    </div>)) : (<Component {...props} />)  
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.loggedIn,
    checkRole: state.auth.roleName
});

export default connect(mapStateToProps)(PublicRoute);

