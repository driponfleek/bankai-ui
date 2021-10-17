import React from 'react';
import PropTypes from 'prop-types';

const withTabPanelContent = (Comp) => {
    const wrapped = (props) => {
        const { tabProps, panelProps, key, ...rest } = props;

        return <Comp {...rest} />;
    };

    wrapped.defaultProps = {
        tabProps: {},
        panelProps: {},
    };
    wrapped.propTypes = {
        key: PropTypes.string,
        tabProps: PropTypes.object,
        panelProps: PropTypes.object,
    };

    return wrapped;
};

const TabPanelContentComposer = withTabPanelContent;

export default TabPanelContentComposer;
