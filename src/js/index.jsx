import React from 'react';
import App from './components/App';
import {Router, Route} from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';


React.initializeTouchEvents(true);

React.render((
  <Router history={BrowserHistory}>
    <Route path="/" component={App} />
      <Route path="/admin" component={Admin} />

  </Router>
), document.getElementById('main'));
