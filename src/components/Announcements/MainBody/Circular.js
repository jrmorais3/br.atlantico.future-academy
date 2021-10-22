import React from 'react';

function Circular(props) {
  return (
		<div class="circular">
            <a href="#">
                <h4>
                    {props.title}
                </h4>
            </a>
            <p>Issued By: {props.issuedBy}</p>
            <hr />
		</div>
  );
}

export default Circular;
