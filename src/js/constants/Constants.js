var APIRoot = "https://ivotify-test.herokuapp.com";

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  APIEndpoints: {
    LOGIN:            APIRoot + "/api/sessions",
    GET_ISSUES:       APIRoot + 'api/issues',
    GET_CANDIDATES:   APIRoot + 'api/candidates'
  },

  PayloadSources: ({
    SERVER_ACTION: "SERVER_ACTION",
    VIEW_ACTION: "VIEW_ACTION"
  }),

  ActionTypes: ({

    // Session
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_RESPONSE: "LOGIN_RESPONSE",

    // Routes
    REDIRECT: "REDIRECT",

    // Issues
    LOAD_ISSUES: "LOAD_ISSUES",
    RECEIVE_ISSUES: "RECEIVE_ISSUES", 
    LOAD_ISSUE: "LOAD_ISSUE", 
    RECEIVE_ISSUE: "RECEIVE_ISSUE",
    CREATE_ISSUE: "CREATE_ISSUE",
    DESTROY_ISSUE: "DESTROY_ISSUE",
    RECEIVE_CREATED_ISSUE: "RECEIVE_CREATED_ISSUE"
      })

};