import React from 'react';
import logo from './logo.png';

class Header extends React.Component{
    render(){
        return (
            <header>
                <div style={
                    {
                        height: "18vh",
                        position: "fixed",
                        top: "0",
                        paddingTop: "10px",
                        paddingBottom: "15px",
                        display: "flex",
                      }
                }>
                        <img className='Headeer-logo' src={logo} width="110px" height= "110px" style={{marginLeft:"2vw", marginRight:"2vw"}} alt='nsut logo'/>
                        <div className="Department-Name">
                            <h1 >
                                <b>Department Of Computer Science And Engineering</b>
                                <br/>
                            </h1>
                            <p>
                                Netaji Subhas University of Technology
                            </p>
                        </div>			
                </div>
            </header>
        )
    }
}

export default Header;