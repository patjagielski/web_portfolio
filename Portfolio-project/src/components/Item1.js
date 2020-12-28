import React from 'react';

const Item1 = (props) => {
    console.log("Something is happening");
    return(
        <div>
            <h1>Item {props.match.params.id}</h1>
        </div>
    );
    
};

export default Item1;