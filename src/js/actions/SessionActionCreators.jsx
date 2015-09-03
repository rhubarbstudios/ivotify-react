import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';
import WebAPIUtils from '../utils/WebAPIUtils.js';

var ActionTypes = Constants.ActionTypes;

module.exports = {

  login: function(email, password) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  } 
};