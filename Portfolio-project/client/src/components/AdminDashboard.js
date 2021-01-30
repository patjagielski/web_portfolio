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
        history.push('/admin');
    }

    return(
        <div>
        <div>
            <h1>{getLang === "en" ? (getLiterals.en.A_freelancers):( getLang === "pl" ? (getLiterals.pl.A_freelancers):(getLiterals.ru.A_freelancers))}</h1>
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>{getLang === "en" ? (getLiterals.en.no_users):( getLang === "pl" ? (getLiterals.pl.no_users):(getLiterals.ru.no_users))}</h1>
                    </div>
                ) : (
                    baseState.map((values, index)=>{
                        if(values.roleName === "FREELANCER"){
                            return <div><FreelanceUsers key={values.userId} {...values} /> <button onClick={((e)=>{handleOnClick(values.userId)})}>X</button> </div>
                        }
                    })
                )
            }
        </div>
        <div>
            <h1>{getLang === "en" ? (getLiterals.en.A_admin):( getLang === "pl" ? (getLiterals.pl.A_admin):(getLiterals.ru.A_admin))}</h1>
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>{getLang === "en" ? (getLiterals.en.no_users):( getLang === "pl" ? (getLiterals.pl.no_users):(getLiterals.ru.no_users))}</h1>
                    </div>
                ) : (
                    baseState.map((values, index)=>{
                        if(values.roleName === "ADMIN"){
                            return <div><AdminUsers key={values.userId} {...values} /> <button>X</button> </div>
                        }
                    })
                )
            }
        </div>
        <div>
            <h1>{getLang === "en" ? (getLiterals.en.A_recruiters):( getLang === "pl" ? (getLiterals.pl.A_recruiters):(getLiterals.ru.A_recruiters))}</h1>
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>{getLang === "en" ? (getLiterals.en.no_users):( getLang === "pl" ? (getLiterals.pl.no_users):(getLiterals.ru.no_users))}</h1>
                    </div>
                ) : (
                    baseState.map((values,index)=>{
                        if(values.roleName === "RECRUITER"){
                            return <div><RecruiterUsers key={values.userId} {...values} /> <button onClick={((e)=>{handleOnClick(values.userId)})}>X</button> </div>
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