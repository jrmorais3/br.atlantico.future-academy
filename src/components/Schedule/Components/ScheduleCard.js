import React from 'react';

function ScheduleCard(props){
    return(
        <div className="Schedule-Content-elements">
            <div className='Schedule-Detail-part'>
                <h2><b>{props.item.name}</b></h2>
                <p>{props.item.password}</p>
                <p>
                    <span className="email">{props.item.email} </span>
                    <span className="phone">{props.item.phone}</span>
                </p>
            </div>
        </div>
    )
}

export default ScheduleCard;