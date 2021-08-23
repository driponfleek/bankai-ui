const ReactTestUtils = require('react-dom/test-utils');

// *******************************************************
// Finds all elements that match the specified tag name.
// *******************************************************
const findAllElementsWithTagName = (wrapper, tagName) => {
    return ReactTestUtils.scryRenderedDOMComponentsWithTag(wrapper, tagName);
};

module.exports = findAllElementsWithTagName;
