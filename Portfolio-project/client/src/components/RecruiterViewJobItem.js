import React from 'react';

export const RecruiterViewJobItem = ({jobId,jobTitle,techRequirements,levelOfExpertise,jobDescription}) => (
<div>
    <h1>Job: {jobId}</h1>
    <h2>Job Title:{jobTitle}</h2>
    <h2>Tech Requirements:{techRequirements}</h2>
    <h2>Expertise Level:{levelOfExpertise}</h2>
    <h3>Job Description:{jobDescription}</h3>
</div>
)