import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllUsers} from '../actions/admin';
import {FreelanceUsers} from './FreelanceUsers';
import {AdminUsers} from './AdminUsers';
import {RecruiterUsers} from './RecruiterUsers';
import {startRemoveUser} from '../actions/admin';
import { history } from '../routers/AppRouter';

function AdminDashboard({getAllUsers, startRemoveUser}){
    
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
            <h1>FREELANCERS</h1>
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>NO USERS</h1>
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
            <h1>ADMINS</h1>
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>NO USERS</h1>
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
            <h1>RECRUITERS</h1>
            {
                baseState.length === 0 ? (
                    <div>
                        <h1>NO USERS</h1>
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

export default connect(undefined, mapDispatchToProps)(AdminDashboard)