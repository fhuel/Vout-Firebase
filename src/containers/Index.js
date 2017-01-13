import React from 'react';
import {Navbar} from '../components/Nav/Navbar';

export class Index extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <div className="page">
          this.props.children: {this.props.children}
        </div>
      </div>
    )
  }
}

export default Index;
