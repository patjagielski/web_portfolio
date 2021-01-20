import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';



const RecruiterHeader = () => (
    <header>
        <div>
            <NavLink to='/recruiter' activeClassName='is-active' exact={true}>Dashboard</NavLink>
            <br />
            <NavLink to='/portfolio' activeClassName='is-active' exact={true}>Portfolio</NavLink>
            <br />
            <NavLink to='/contactme' activeClassName='is-active' exact={true}>Contact me</NavLink>
            <br />
            <button onClick={(startLogout)}>Logout</button>
        </div>
    </header>
);

export default RecruiterHeader;