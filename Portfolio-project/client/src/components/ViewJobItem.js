import React, { useEffect, useState } from 'react'


export const ViewJobItem = ({jobDescription,jobTitle,levelOfExpertise,techRequirements}) =>{

    // const [jobDescription, setJobDescriptions] = useState("");
    // const [jobTitle, setJobTitle] = useState("");
    // const [levelOfExpertise, setLevelOfExpertise] = useState("");
    // const [techRequirements, setTechRequirements] = useState("");

    // useEffect(()=>{
    //     async function fetchData() {
    //         const result = await getJobs();
    //         setBaseState(result);
    //         result.map((val)=>{
    //             setJobDescriptions(val.jobDescription);
    //             setJobTitle(val.jobTitle);
    //             setLevelOfExpertise(val.levelOfExpertise);
    //             setTechRequirements(val.techRequirements);
    //         })
    //     }
    //     fetchData();
        console.log(jobTitle)
    // }, []);
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


// const mapDispatchToProps = (dispatch) => ({
//     getJobs:() => dispatch(getJobs())
// })

// export default connect(undefined, mapDispatchToProps)(ViewJobListings)