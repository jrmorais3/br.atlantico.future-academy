import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu/index';
import FacultyMain from './Components/Main';
import './faculty.css';

class Faculty extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
          <TopMenu/>
          <FacultyMain />
      </div>
    )
  }
}

export default Faculty;