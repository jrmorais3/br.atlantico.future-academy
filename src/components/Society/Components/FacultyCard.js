import React from 'react';

function FacultyCard(props){
    return(
        <div className="Society-Content-elements">
            <div className='Society-Detail-part'>
                <h2><b>{props.item.name}</b></h2>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default FacultyCard;