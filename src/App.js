import React, { Component } from 'react';
import './App.css';

import TestComponent from './components/TestComponent/TestComponent'
import TestStatelessFunction from './components/TestStatelessFunction/TestStatelessFunction'

import AppHeader from './components/AppHeader/AppHeader'
import Poll from './components/Poll/Poll'


import base from './base' // All the Firebase stuff


// import {testHelperFunction} from './helpers'



class App extends Component {

  constructor(props) {
    super(props);

    // Esempio di "giro di this"
    // this.functionName = this.functionName.bind(this);
    this.increment = this.increment.bind(this);
    this.updateField = this.updateField.bind(this);


    this.state = {
        uid : '',
        speed : '',
        pino : '',
        polls: {pino: "ginoss"}
    };

    //console.log('snapshot', this.props);


  }

  componentWillMount() {
    // was `${this.props.params.storeId}/`
    this.ref = base.syncState('/',{
      context: this,
      state: 'app'
    });
  }

  //right after is rendered to the DOM
  componentDidMount() {


    const rootRef = base.database().ref();

    const speedRef = rootRef.child('speed');
    // This will re-render the app everytime this data changes on the server
    speedRef.on('value', snap => {
      this.setState({
          speed: snap.val()
      });
    });

    const pinoRef = rootRef.child('pino');
    // This will re-render the app everytime this data changes on the server
    pinoRef.on('value', snap => {
      this.setState({
          pino: snap.val()
      });
    });


  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

/*
  anonLogin(e){
    firebase.auth().signInAnonymously();

    firebase.auth().onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);

      if(firebaseUser) {
        btnLogOut.classList.remove('hide');
      } else {
        btnLogOut.classList.add('hide');
      }
    });
  }

*/

  increment(e){
    e.preventDefault();

    const rootRef = base.database().ref();
    const incremented = this.state.speed + 1;
    // the firebase call setState when it is changed ( in componentDidMount() )
    rootRef.update({speed: incremented});
  }


  updateField(e) {

    const rootRef = base.database().ref();
    rootRef.update({pino: e.target.value});

  }




  render() {

    //var loginOnClic = firebase.auth().signInAnonymously;

    return (
      <div className="App">

        <AppHeader />

        <h2>{this.state.pino} | {this.state.speed}</h2>
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={this.state.pino} onChange={this.updateField}></input>
<br/><br/><br/>
        <a id="btnLogin" href="#" onClick={ this.increment }>(INCREMENT)</a><br/>
        <a id="btnLogOut" href="#" className="hide">Login Out</a>
<br/><br/><br/>

        <TestComponent param=" DAJE!"/>

        <TestStatelessFunction param=" DAJE! anche stateless"/>

        <Poll />

      </div>
    );
  }
}

export default App;
