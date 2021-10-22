import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import MainBody from './MainBody/mainBody';
import './announcement.css';
import TopMenu from '../Shared/topMenu';

class Announcement extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Header />
        <TopMenu/>
        <MainBody />
      </div>
    );
}
}

export default Announcement;
