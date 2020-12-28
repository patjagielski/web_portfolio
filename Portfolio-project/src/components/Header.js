import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <div>
            <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
            <br />
            <NavLink to='/portfolio' activeClassName='is-active' exact={true}>Portfolio</NavLink>
            <br />
            <NavLink to='/contactme' activeClassName='is-active' exact={true}>Contact me</NavLink>
        </div>
    </header>
);

export default Header;