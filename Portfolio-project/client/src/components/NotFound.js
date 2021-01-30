import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const NotFoundPage = ({getLang, getLiterals}) => (
    <div>
    {getLang === "en" ? (getLiterals.en.FL_contact_me):( getLang === "pl" ? (getLiterals.pl.FL_contact_me):(getLiterals.ru.FL_contact_me))}<Link to="/">Home</Link>
    </div>
);


const mapStateToProps = (state) => ({
    getLiterals: state.literals,
    getLang: state.lang.lang
});

export default connect(mapStateToProps)(NotFoundPage);