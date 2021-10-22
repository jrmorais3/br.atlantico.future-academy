import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed'
import MainBody from './MainBody/mainBody';
import TopMenu from '../Shared/topMenu/index'
import './about.css';

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TopMenu/>
        <MainBody />
      </div>
    );
}
}

export default About;
