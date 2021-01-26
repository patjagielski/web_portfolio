import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/auth';



const RecruiterHeader = ({logout}) => (
    <header>
        <div>
            <NavLink to='/CreateJobListing' activeClassName='is-active' exact={true}>Create Job Listing</NavLink>
            <br />
            <NavLink to='/EditJobListing' activeClassName='is-active' exact={true}>Edit Job Listing</NavLink>
            <br />
            <NavLink to='/ViewMyJobs' activeClassName='is-active' exact={true}>View My Jobs</NavLink>
            <button onClick={(logout)}>Logout</button>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(RecruiterHeader);