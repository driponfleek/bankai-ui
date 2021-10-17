const React = require('react');
const ShallowRenderer = require('react-test-renderer/shallow');

// *******************************************************
// Renders component “one level deep” and assert facts
// about what its render method returns, without worrying
// about the behavior of child components, which are not
// instantiated or rendered.
// *******************************************************
const shallowRender = (
    Comp,
    props = {},
    getInstance = false,
    isMobX = false,
) => {
    const renderer = new ShallowRenderer();
    const El = React.createElement(
        isMobX ? Comp.wrappedComponent : Comp,
        props,
    );

    renderer.render(El);

    // eslint-disable-next-line
    return getInstance ? renderer._instance : renderer.getRenderOutput();
};

module.exports = shallowRender;
