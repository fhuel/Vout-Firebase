import React from 'react';
import './AppHeader.css';
import logo from '../../logo.svg';

class AppHeader extends React.Component {

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

}



// We need to export it to be able to use it in other files
export default AppHeader;
