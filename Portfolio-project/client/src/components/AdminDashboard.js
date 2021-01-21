import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllUsers} from '../actions/admin';
import {FreelanceUsers} from './FreelanceUsers';
import {AdminUsers} from './AdminUsers';
import {RecruiterUsers} from './RecruiterUsers';

function AdminDashboard({getAllUsers}){
    
    const [baseState, setBaseState] = useState("");

    useEffect(()=>{
        async function fetchData() {
            const result = await getAllUsers();
            setBaseState(result);
            console.log(baseState);
        }
        fetchData();
    },[]);

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
                            return <FreelanceUsers key={index} {...values} />
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
                            return <AdminUsers key={index} {...values} />
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
                            return <RecruiterUsers key={index} {...values} />
                        }
                    })
                )
            }
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    getAllUsers: () => dispatch(getAllUsers())
});

export default connect(undefined, mapDispatchToProps)(AdminDashboard)