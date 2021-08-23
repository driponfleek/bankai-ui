const ReactTestUtils = require('react-dom/test-utils');

// *******************************************************
// Finds all elements with a specified class name.
// *******************************************************
const findAllElementsWithClassName = (wrapper, className) => {
    return ReactTestUtils.scryRenderedDOMComponentsWithClass(
        wrapper,
        className,
    );
};

module.exports = findAllElementsWithClassName;
