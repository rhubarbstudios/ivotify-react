var APIRoot = "https://ivotify-test.herokuapp.com";

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/api/sessions",
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