import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import SocietyMain from './Components/Main';
import TopMenu from '../Shared/topMenu/index'
import './society.css';

class Society extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
          <TopMenu/>
          <SocietyMain />
      </div>
    )
  }
}

export default Society;