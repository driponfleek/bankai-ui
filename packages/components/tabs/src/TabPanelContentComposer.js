import React from 'react';
import PropTypes from 'prop-types';

const withTabPanelContent = (Comp) => {
    const Wrapped = (props) => {
        const { tabProps, panelProps, key, ...rest } = props;

        return <Comp {...rest} />;
    };

    Wrapped.defaultProps = {
        tabProps: {},
        panelProps: {},
    };
    Wrapped.propTypes = {
        key: PropTypes.string,
        tabProps: PropTypes.object,
        panelProps: PropTypes.object,
    };

    return Wrapped;
};

const TabPanelContentComposer = withTabPanelContent;

export default TabPanelContentComposer;
