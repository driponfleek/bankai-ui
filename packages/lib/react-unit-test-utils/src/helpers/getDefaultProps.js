const getDefaultProps = (Comp, isMobXInjected = false) => {
    if (isMobXInjected) {
        return Comp.wrappedComponent.defaultProps;
    }

    return Comp.defaultProps;
};

module.exports = getDefaultProps;
