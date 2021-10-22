import React from 'react';

function OpportunityCard(props){
    return(
        <div className="Opportunity-Content-elements">
                <h2>{props.item.name}</h2>
                <br/>
                <p>{props.item.description}</p>
            </div>
    )
}

export default OpportunityCard;