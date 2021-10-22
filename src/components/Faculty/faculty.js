import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu';
import Main from './Components/Main';
import './faculty.css';

class Faculty extends React.Component{
  render(){
    return (
      <div className="faculty">
          <Header />
          <TopMenu/>
          <Main />
      </div>
    )
  }
}

export default Faculty;