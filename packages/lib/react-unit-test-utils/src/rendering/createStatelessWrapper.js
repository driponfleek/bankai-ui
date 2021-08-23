const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const createReactClass = require('create-react-class');

// *******************************************************
// Similar to createWrapper, but wraps your
// stateless/functional component in something that can be
// rendered with a ref. This is necessary due to
// stateless/functional components not being able to have
// a ref.
// *******************************************************
const createStatelessWrapper = (Comp, props = {}) => {
    const El = React.createElement(Comp, props);
    const StatelessComp = createReactClass({
        render() {
            return El;
        },
    });

    return ReactTestUtils.renderIntoDocument(
        React.createElement(StatelessComp),
    );
};

module.exports = createStatelessWrapper;
