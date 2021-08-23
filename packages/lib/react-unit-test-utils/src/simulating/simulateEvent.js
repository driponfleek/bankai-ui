const ReactTestUtils = require('react-dom/test-utils');

// *******************************************************
// event = 'click', 'change', etc.
// element = DOM element (div, button, etc)
// eventData = Mock data passed back on event trigger
// *******************************************************
const simulateEvent = (event, element, eventData = {}) => {
    return ReactTestUtils.Simulate[event](element, eventData);
};

module.exports = simulateEvent;
