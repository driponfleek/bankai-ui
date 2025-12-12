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
