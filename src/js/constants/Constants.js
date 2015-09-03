var APIRoot = "http://localhost:3000";

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
  },

  PayloadSources: ({
    SERVER_ACTION: 'SERVER_ACTION',
    VIEW_ACTION: 'VIEW_ACTION'
  }),

  ActionTypes: ({
    // Session
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_RESPONSE: 'LOGIN_RESPONSE',

    // Routes
    REDIRECT: null

      })

};