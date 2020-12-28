import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1> This here is my Portfolio </h1>
        
        <NavLink to='/portfolio/1' activeClassName='is-active' exact={true}>Item 1</NavLink>
        <br />
        <NavLink to='/portfolio/2' activeClassName='is-active'>Item 2</NavLink>
        
        
    </div>
);

export default Portfolio;
