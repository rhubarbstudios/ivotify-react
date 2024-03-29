import React from 'react';
import {Navigation} from 'react-router';
import LoginPage from './LoginPage.jsx'
import SessionStore from '../stores/SessionStore.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default React.createClass({

  propTypes: {
    children: React.PropTypes.object
  },

  componentWillMount() {},

  // getInitialState() {
  //   return {
  //     loading: false
  //   };
  // },

  componentWillUnmount() {},

  getStyles() {
    return {
      container: {}
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.container}>
        <LoginPage />
      </div>

    );
  }

});
