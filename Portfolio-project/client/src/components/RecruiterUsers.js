import React from 'react'

export const RecruiterUsers = ({firstName, lastName, email, username, password, roleName}) => {
    return(
    <div>
        <div>
            <p>{firstName} | {lastName}</p><button>X</button>
        </div>
    </div>
    )
}

