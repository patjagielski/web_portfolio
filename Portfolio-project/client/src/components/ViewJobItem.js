import React from 'react'


export const ViewJobItem = ({jobDescription,jobTitle,levelOfExpertise,techRequirements}) =>{

    return(
        <div>
        
        <h2>Job Title</h2>
        {jobTitle}
        <br/>
        <h2>Level of Expertise</h2>
        {levelOfExpertise}
        <br />
        <h3>Tech Stack</h3>
        {techRequirements}
        <h3>Job jobDescription</h3>
        {jobDescription}
        </div>
    )
}

