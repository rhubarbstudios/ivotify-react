import Constants from '../constants/SmallConstants.js';
import Dispatcher from ('flux').Dispatcher;
import assign from 'object-assign';

var PayloadSources = Constants.PayloadSources;

var AppDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;
