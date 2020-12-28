import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>My Portfolio</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
        <br />
        <NavLink to='/portfolio' activeClassName='is-active' exact={true}>Portfolio</NavLink>
        <br />
        <NavLink to='/contactme' activeClassName='is-active' exact={true}>Contact me</NavLink>
    </header>
);

export default Header;