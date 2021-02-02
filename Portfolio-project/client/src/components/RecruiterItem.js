import React from 'react';

export const RecruiterItem = (val) => (
    <div>
        <div className="row">
            <div className="col">
                <span className="custom-card-desc-user">{val.firstName}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc-user">{val.lastName}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc-user">{val.userEducation}</span>
            </div>
            <div className="col">
                <span className="custom-card-desc-user">{val.email}</span>
            </div>
            
            </div>
        </div>
)