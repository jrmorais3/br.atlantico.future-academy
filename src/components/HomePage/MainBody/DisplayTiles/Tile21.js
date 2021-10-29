import React from 'react';


function Tile() {
  return (
		<div class="tile">
            <div className="tileContent">
                <div className="tileContent-text">
                    <h4>
                        <ul>
                        <li>React Router helps you create routes to your single page applications. It’s very powerful and easy to use with your React application.</li>
                        </ul>
                    </h4>
                    <section className="sectionMain">
                        <div className = "fPlan">
                            <h2>
                                <b className="Text-Box">Plano Mensal</b>
                            </h2>
                        </div>
                        <div className = "sPlan">
                            <h2>
                                Plano Anual
                            </h2>
                        </div>
                    </section>
                </div>
            </div>

            <div className="tileHeading">
                <hr /> 
                <h2>Conheça nossos planos</h2> 
                <hr />
            </div>
		</div>
  );
}

export default Tile;
