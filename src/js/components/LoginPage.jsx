import React from 'react';
import SessionActionCreators from '../actions/SessionActionCreators.jsx';
import SessionStore from '../stores/SessionStore.jsx';

var LoginPage = React.createClass({

  getInitialState: function() {
    return { errors: [] };
  },
 
  componentDidMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ errors: SessionStore.getErrors() });
  },

  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    SessionActionCreators.login(email, password);
  },

 render: function() {
    return (
      <div>
        <div className="row">
          <div className="loginbox">
            <form onSubmit={this._onSubmit}>
              <div className="login__field">
                <label name="email">Email</label>
                <input type="text" name="email" ref="email" /> 
              </div>
              <div className="login__field">
                <label name="password">Password</label>
                <input type="password" name="password" ref="password" />
              </div>
              <button type="submit" className="login__submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginPage;