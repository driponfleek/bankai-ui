const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');

// Renders a React Element into a detached DOM node in the document.
const createWrapper = (Comp, props = {}, isMobX = false) => {
    let Type = Comp;

    if (isMobX) {
        Type = Comp.wrappedComponent;
    }

    const El = React.createElement(Type, props);

    return ReactTestUtils.renderIntoDocument(El);
};

module.exports = createWrapper;
