import Rebase from 're-base';

// Create a "base"
// meaning a connection to our Firebase database
// Publishing this keys on a client-side file might seem unsafe,
// but this is where the security rules of Firebase come into play
const base = Rebase.createClass({
  apiKey: "AIzaSyD2La1IoEJj3ywtGcu2CD2CBBtP3VwWIEg",
  authDomain: "vout-396f2.firebaseapp.com",
  databaseURL: "https://vout-396f2.firebaseio.com",
  storageBucket: "vout-396f2.appspot.com",
  messagingSenderId: "457883122800"
});

// Exporting this let us use this "base" in all the app
// just importing as:
// import base from '../base'
export default base;
