jest.dontMock('../LoginPage.jsx');
describe('LoginPage', function() {
  it('Does the login page render', function() {
    var React = require('react/addons');
    var LoginPage = require('../LoginPage.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render component in the document
    var loginpage = TestUtils.renderIntoDocument(
      <LoginPage />
    );
  });
});