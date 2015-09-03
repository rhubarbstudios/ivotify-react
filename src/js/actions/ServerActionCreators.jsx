import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';

var ActionTypes = Constants.ActionTypes; 

module.exports = {

  receiveLogin: function(json, errors) {
    AppDispatcher.handleServerActsion({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
}
};