import React from 'react';


function Tile(props) {
  const listItems = props.content.map(item => <li>{item}</li>)
  return (
		<div class="tile">

      <div className="tileHeading">
        <hr /> 
          <h2>{props.title}</h2> 
        <hr />
      </div>

      <div className="tileContent">
        <div className="tileContent-text">
          <h4>
            <ul>
              {listItems}
            </ul>
          </h4>
        </div>
      </div>
		</div>
  );
}

export default Tile;
