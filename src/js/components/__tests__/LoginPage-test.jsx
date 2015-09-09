jest.dontMock('../LoginPage.jsx');

var React = require('react/addons');
var LoginPage = require('../LoginPage.jsx');
var TestUtils = React.addons.TestUtils;

describe('LoginPage', function() {
  it('Does the login page render', function() {
  
    // Render component in the document
    var loginpage = TestUtils.renderIntoDocument(
      <LoginPage />
    );
  });
});