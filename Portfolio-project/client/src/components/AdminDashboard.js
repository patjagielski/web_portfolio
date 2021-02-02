import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllUsers} from '../actions/admin';
import {FreelanceUsers} from './FreelanceUsers';
import {AdminUsers} from './AdminUsers';
import {RecruiterUsers} from './RecruiterUsers';
import {startRemoveUser} from '../actions/admin';
import { history } from '../routers/AppRouter';

function AdminDashboard({getAllUsers, startRemoveUser, getLiterals,getLang}){
    
    const [baseState, setBaseState] = useState("");

    useEffect(()=>{
        async function fetchData() {
            const result = await getAllUsers();
            setBaseState(result);
        }
        fetchData();
    },[]);

    const handleOnClick = (id) => {
        startRemoveUser(id);
        history.push('/');
    }

    return(
        <div className="content-container__admin">
        <div className="container">
            <h1 className="display-3">{getLang === "en" ? (getLiterals.en.A_freelancers):( getLang === "pl" ? (getLiterals.pl.A_freelancers):(getLiterals.ru.A_freelancers))}</h1>
        </div>
        <hr />

            
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>{getLang === "en" ? (getLiterals.en.no_users):( getLang === "pl" ? (getLiterals.pl.no_users):(getLiterals.ru.no_users))}</h1>
                    </div>
                ) : (
                    baseState.map((values, index)=>{
                        if(values.roleName === "FREELANCER"){
                            return(
                            <div className="content-container__user-list">
                            
                                    <div className="clearfix">
                                        <div className="btn-group inline pull-left">
                                        
                                            
                                            <button className="btn btn-danger btn-lg" onClick={((e)=>{handleOnClick(values.userId)})}>X</button> 
                                           
                                            <FreelanceUsers key={values.userId} {...values} />
                                            
                                            
                                    </div>
                                </div>
                                <hr />
                            </div>)
                        }
                    })
                )
            }
            <div className="content-container__admin">
        <div className="container">
                <h1 className="display-3">{getLang === "en" ? (getLiterals.en.A_admin):( getLang === "pl" ? (getLiterals.pl.A_admin):(getLiterals.ru.A_admin))}</h1>
            </div>
            <hr />
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>{getLang === "en" ? (getLiterals.en.no_users):( getLang === "pl" ? (getLiterals.pl.no_users):(getLiterals.ru.no_users))}</h1>
                    </div>
                ) : (
                    baseState.map((values, index)=>{
                        if(values.roleName === "ADMIN"){
                            return (
                            <div className="content-container__user-list">
                                <div className="clearfix">  
                                    <div className="btn-group inline pull-left">
                                        <button className="btn btn-danger btn-lg" >X</button> 
                                        <AdminUsers key={values.userId} {...values} />
                                
                                    </div>
                                    </div>
                                <hr />
                            </div>)
                        }
                    })
                )
            }
        
        </div>
        <div className="content-container__admin">
        <div className="container">
                <h1 className="display-3">{getLang === "en" ? (getLiterals.en.A_recruiters):( getLang === "pl" ? (getLiterals.pl.A_recruiters):(getLiterals.ru.A_recruiters))}</h1>
            </div>
            <hr />
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>{getLang === "en" ? (getLiterals.en.no_users):( getLang === "pl" ? (getLiterals.pl.no_users):(getLiterals.ru.no_users))}</h1>
                    </div>
                ) : (
                    baseState.map((values,index)=>{
                        if(values.roleName === "RECRUITER"){
                            return (
                                <div className="content-container__user-list">
                                <div className="clearfix">  
                                    <div className="btn-group inline pull-left">
                                        <button className="btn btn-danger btn-lg" onClick={((e)=>{handleOnClick(values.userId)})}>X</button>  
                                        <RecruiterUsers key={values.userId} {...values} /> 
                                    </div>
                                    </div>
                                <hr />
                            </div>)
                        }
                    })
                )
            }
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    getAllUsers: () => dispatch(getAllUsers()),
    startRemoveUser: (uid) => dispatch(startRemoveUser(uid))
});
const mapStateToProps = (state)=>({
    getLiterals: state.literals,
    getLang: state.lang.lang
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)