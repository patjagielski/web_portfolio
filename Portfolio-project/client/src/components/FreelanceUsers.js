import React from 'react'

export const FreelanceUsers = ({firstName, lastName, email, username, password, roleName}) => (
    <div>
        <div className="row">
            <div className="col">
               <span className="custom-card-desc">{firstName}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc">{lastName}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc">{email}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc">{roleName}</span>
            </div>
        </div>
    </div>
)