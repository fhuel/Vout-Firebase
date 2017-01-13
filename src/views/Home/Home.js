import React from 'react';
import './Home.css';

import base from '../../base.js';

class HomePage extends React.Component {

  authenticate(passedProvider) {
    // was
    //base.AuthenticateWithOAuthPopup(provider, this.authHandler);
    var auth = base.auth();

    if (passedProvider === "facebook") {
      console.log('trying to log in with ' + passedProvider);
      var provider = new base.auth.FacebookAuthProvider();
    }

    auth.signInWithPopup(provider).then(function(result) {
      // User signed in!
      console.log(result);
      //this.setState('uid', result.user.uid);
    }).catch(function(error) {
      // An error occurred
      console.error(error);
    });

  }

  authHandler(result) {
    console.log();

      // User signed in!
      //var uid = result.user.uid;
  }

  logout() {
    base.unauth();
    //this.setState({uid: null});
  }

  renderLogin() {

  }


  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, {user});
      }
    });
  }


  // Every component NEEDS AT LEAST a render method to function
  render() {


    // here we will return some JSX
    return(
      <div>
        {/* This is a fucking JSX comment !!! */}
        <h1>HOME PAGE FTW</h1>
      </div>
    )
  }
}

// We need to export it to be able to use it in other files
export default HomePage;
