const React = require('react');
const TestRenderer = require('react-test-renderer');

// *******************************************************
// Used to render React components to pure JavaScript
// objects. Keep in mind some methods are not available
// to stateless components.
// *******************************************************
const renderAsObject = (Comp, props) => {
    const El = React.createElement(Comp, props);

    return TestRenderer.create(El);
};

module.exports = renderAsObject;
