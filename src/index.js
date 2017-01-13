import React from 'react';
import ReactDOM from 'react-dom';

import { Index } from './containers/Index';
import Home from './views/Home/Home';
import App from './App';

import './index.css';



/* ========================= ROUTING ========================= */
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
/* =========================================================== */


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="app" component={App} />
      {/*<Route path="/" component={HomePage}/>
      <Route path="/app" component={App}/>*/}
    </Route>
  </Router>),
  document.getElementById('root')
);
