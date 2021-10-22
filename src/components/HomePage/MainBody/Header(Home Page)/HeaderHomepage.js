import React from 'react';
import './HeaderHomepage.css';
import logo from '../../../images/nsut_logo.png'

class HeaderHomepage extends React.Component {
	constructor() {
		super();
		this.state = {
			header: false
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount(){
		window.addEventListener("scroll", this.handleScroll);
	  }

	handleScroll(event) {
		if (window.pageYOffset > 0) {
			  this.setState({ header: true });   
		}
		else{
			  this.setState({ header: false });
		}
	}
	
	render() {
		return (
			<header onScroll={this.handleScroll}>
				<div className={this.state.header ? "Header-Site-Title-Active" : "Header-Site-Title"}>
					<img className = "Header-logo" src={logo} alt =" "/>
					
					<div className="Department-Name">
						<h1 >
							<b>Department Of Computer Science And Engineering</b>
							<br/>
						</h1>
						<h3>
							Netaji Subhas University of Technology
						</h3>
						
					</div>			
				</div>
			</header>
		);
	}
}

export default HeaderHomepage;
