import React from 'react'



export const RecruiterUsers = ({firstName, lastName, email, username, password, roleName}, ) => (

    <div>
        <div className="row">
            <div className="col">
               <span className="custom-card-desc-user">{firstName}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc-user">{lastName}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc-user">{email}</span>
            </div>
        </div>
    </div>
    )
