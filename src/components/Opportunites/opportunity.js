import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu';
import Main from './Components/Main';
import './opportunity.css';

class Opportunity extends React.Component{
  render() {
    return (
      <div className="App">
          <Header/>
          <TopMenu/>
          <Main />
      </div>
    )
  }
}

export default Opportunity;