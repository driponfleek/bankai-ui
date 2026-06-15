/**
 * @param {Object} props
 * @param {Object} [props.tabProps] - Tab configuration props — consumed by the composer and not forwarded to the wrapped component
 * @param {Object} [props.panelProps] - Panel configuration props — consumed by the composer and not forwarded to the wrapped component
 */
const withTabPanelContent = (Comp) => {
    const Wrapped = (props) => {
        const propsClone = { ...props };
        delete propsClone.tabProps;
        delete propsClone.panelProps;
        delete propsClone.key;

        return <Comp {...propsClone} />;
    };

    return Wrapped;
};

const TabPanelContentComposer = withTabPanelContent;

export default TabPanelContentComposer;
