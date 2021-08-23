const ReactTestUtils = require('react-dom/test-utils');

// *******************************************************
// Finds 1 element with a specified tag name. Expects
// 1 result only and will throw error if there is
// more than one result. For finding all elements with a
// tag name, use findAllElementsWithTagName
// *******************************************************
const findRenderedDOMComponentWithTagName = (wrapper, className) => {
    return ReactTestUtils.findRenderedDOMComponentWithTag(wrapper, className);
};

module.exports = findRenderedDOMComponentWithTagName;
