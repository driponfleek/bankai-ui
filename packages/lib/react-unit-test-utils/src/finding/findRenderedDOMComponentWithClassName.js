const ReactTestUtils = require('react-dom/test-utils');

// *******************************************************
// Finds 1 element with a specified CSS class name. Expects
// 1 result only and will throw error if there is
// more than one result. For finding all elements with a
// class, use findAllElementsWithClassName
// *******************************************************
const findRenderedDOMComponentWithClassName = (wrapper, className) => {
    return ReactTestUtils.findRenderedDOMComponentWithClass(wrapper, className);
};

module.exports = findRenderedDOMComponentWithClassName;
