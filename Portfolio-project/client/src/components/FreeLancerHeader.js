import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/auth';



const FreeLancerHeader = ({logout}) => {
 

    return(  
      <header>
        <div>
            <NavLink to='/freelancer' activeClassName='is-active' exact={true}>Dashboard</NavLink>
            <br />
            <NavLink to='/portfolio' activeClassName='is-active' exact={true}>Portfolio</NavLink>
            <br />
            <NavLink to='/contactme' activeClassName='is-active' exact={true}>Contact me</NavLink>
            <br />
            <button onClick={logout}>Logout</button>
        </div>
    </header>
);
}
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(FreeLancerHeader);