// FINDING
const findAllElementsWithClassName = require('./src/finding/findAllElementsWithClassName');
const findAllElementsWithTagName = require('./src/finding/findAllElementsWithTagName');
const findRenderedDOMComponentWithClassName = require('./src/finding/findRenderedDOMComponentWithClassName');
const findRenderedDOMComponentWithTagName = require('./src/finding/findRenderedDOMComponentWithTagName');
// HELPERS
const getDefaultProps = require('./src/helpers/getDefaultProps');
// MOCKING
const userAgentMocks = require('./src/mocking/userAgentMocks');
const uuidMock = require('./src/mocking/uuidMock');
// RENDERING
const createStatelessWrapper = require('./src/rendering/createStatelessWrapper');
const createWrapper = require('./src/rendering/createWrapper');
const renderAsObject = require('./src/rendering/renderAsObject');
const shallowRender = require('./src/rendering/shallowRender');
// SIMULATING
const simulateEvent = require('./src/simulating/simulateEvent');

module.exports = {
    // FINDING
    findAllElementsWithClassName,
    findAllElementsWithTagName,
    findRenderedDOMComponentWithClassName,
    findRenderedDOMComponentWithTagName,
    // HELPERS
    getDefaultProps,
    // MOCKING
    userAgentMocks,
    uuidMock,
    // RENDERING
    createStatelessWrapper,
    createWrapper,
    renderAsObject,
    shallowRender,
    // SIMULATING
    simulateEvent,
};
