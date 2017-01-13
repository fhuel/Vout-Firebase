import React from 'react';
import { Link } from 'react-router';

import base from '../../base.js';

export class Navbar extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      uid : null,
      owner : null
    }

    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);

  }


  renderLogin() {
    console.log("renderLogin");
    return (
      <nav className="login">
        <p>Sign in to manage your Polls</p>
        <button className="facebook" onClick={() => this.authenticate('facebook')}>Login with Facebook</button>
      </nav>
    )
  }


  authenticate() {
    console.log("authenticate");
    this.authHandler();
  }

  authHandler() {
    console.log("authHandler");
    var provider = new base.auth.FacebookAuthProvider();
    // Add custom parameters : https://developers.facebook.com/docs/facebook-login/permissions
    //provider.setCustomParameters({'display': 'popup'});

    // Add custom scopes : https://firebase.google.com/docs/reference/js/firebase.auth.FacebookAuthProvider#setCustomParameters
    // provider.addScope('user_birthday');
    base.bind(this);
    base.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      //this.setState.uid = user.uid;
      //console.log("UID: " + this.state.uid);
      console.log(this);
      // ... for a list of errors: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithPopup
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      console.log("errorCode" + errorCode);
      const errorMessage = error.message;
      console.log("errorMessage" + errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log("error email" + email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log("error credential" + credential);
      // ...
    })
  }

  logout() {
    console.log("logout");
    base.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }



  render() {

    const logout = <button onClick={ this.logout() }>Log Out!</button>
    let login = null;
    let notOwener = null;
    // check if the user is logged in, since we store the user id as uid
    if(!this.state.uid){
      // if not logged in
      login = <div>{this.renderLogin()}</div>;
    }

    // is the user the owner of the current poll ?
    if(this.state.uid !== this.state.owner) {
      notOwener = (
        <div>
          <p>Sorry you are not the owner of this poll</p>
          {logout}
        </div>
      )
    }



    return(
      <div className="navbar">
        <Link
          className="link"
          to="/home"
          activeClassName="active">
            Home
        </Link>
        <Link
          className="link"
          to="/app"
          activeClassName="active">
            App
        </Link>
        {login}
        {notOwener}
      </div>
    )
  }
}

export default Navbar;
