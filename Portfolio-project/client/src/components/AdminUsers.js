import React from 'react'

export const AdminUsers = ({firstName, lastName, email, username, password, roleName}) => (
    <div>
        <div>
            <p>{firstName} | {lastName}</p>
        </div>
    </div>
)