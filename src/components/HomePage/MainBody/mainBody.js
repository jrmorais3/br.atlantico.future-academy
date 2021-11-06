import React from 'react';
import './mainBody.css'
import DisplayTiles from './DisplayTiles/displayTiles'
import Header from '../../Shared/Header(fixed)/headerFixed'
import TopMenu from '../../Shared/topMenu/index'


class MainBody extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<main>
				<Header/>
				<TopMenu/>
				<div className="Main-Content">
					<div className="Above-Fold">
						<div className="Home-Branch-Box">			
								<div className="Branch-Box-Heading">
									<h2>
										<b className="Text-Box">Pilates para todos os dias</b>
									</h2>
									Exercite-se o quanto quiser com os nossos planos disponíveis 
								</div>
								<div className="sectionMain"> 
									<div className = "semester-Plan">
										<h2>
											<b className="Text-Box">Plano Mensal</b>
										</h2>
									</div>
									<div className = "annual-Plan">
										<h2>
											<b className="Text-Box">Plano Anual</b>
										</h2>
									</div>
								</div>	
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default MainBody;
