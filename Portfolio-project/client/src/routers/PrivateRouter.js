import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import FreeLancerHeader from '../components/FreeLancerHeader';
import RecruiterHeader from '../components/RecruiterHeader';



export const PrivateRoute = ({checkRole, isAuthenticated, component: Component, rest}) => (
    <Route {...rest} component={(props)=>(
        isAuthenticated ? ( checkRole === "ADMIN" ? (
            <div>
                <AdminHeader />
                <Component {...props}/>
            </div>) : checkRole === "FREELANCER" ? (
                <div>
                    <FreeLancerHeader />
                    <Component {...props}/>
                </div>) : (
                    <div>
                        <RecruiterHeader />
                        <Component {...props}/>
                    </div>)):(
                         <Redirect to="/" />
            )
        )}/>
);
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.loggedIn,
    checkRole: state.auth.roleName
});

export default connect(mapStateToProps)(PrivateRoute);
