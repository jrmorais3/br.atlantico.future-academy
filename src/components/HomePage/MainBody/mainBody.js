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
								</div>
								<section className="sectionMain">
									<div className = "fPlan">
										<h2>
											<b className="Text-Box">Plano Mensal</b>
										</h2>
									</div>
									<div className = "sPlan">
										<h2>
											<b className="Text-Box">Plano Anual</b>
										</h2>
									</div>
								</section>
						</div>
					</div>
					<DisplayTiles />
				</div>
			</main>
		);
	}
}

export default MainBody;
