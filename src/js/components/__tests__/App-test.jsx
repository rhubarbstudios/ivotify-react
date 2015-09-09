jest.dontMock('../App.jsx');

var React = require('react/addons');
var App = require('../App.jsx');
var TestUtils = React.addons.TestUtils;

describe('App', function() {
  it('Does the app render', function() {
  
    // Render component in the document
    var app = TestUtils.renderIntoDocument(
      <App />
    );
  });
});