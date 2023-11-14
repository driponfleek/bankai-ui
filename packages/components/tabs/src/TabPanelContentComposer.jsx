import PropTypes from 'prop-types';

const withTabPanelContent = (Comp) => {
    const Wrapped = (props) => {
        const { tabProps, panelProps, ...rest } = props;
        const propsClone = { ...rest };
        delete propsClone.key;

        return <Comp {...propsClone} />;
    };

    Wrapped.defaultProps = {
        tabProps: {},
        panelProps: {},
    };
    Wrapped.propTypes = {
        tabProps: PropTypes.object,
        panelProps: PropTypes.object,
    };

    return Wrapped;
};

const TabPanelContentComposer = withTabPanelContent;

export default TabPanelContentComposer;
