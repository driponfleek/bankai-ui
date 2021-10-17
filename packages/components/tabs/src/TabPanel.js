import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TabPanel as ARIATabPanel } from 'react-aria-tabpanel';

// Styles
import './styles/tab-panel.scss';

const TabPanel = (props) => {
    const { contextCls, tabId, isActive, children, ...rest } = props;
    const baseCls = 'bankai-tab-panel';

    return (
        <ARIATabPanel
            {...rest}
            className={cx(baseCls, contextCls)}
            tabId={tabId}
            active={isActive}
        >
            {children}
        </ARIATabPanel>
    );
};

TabPanel.defaultProps = {
    isActive: false,
};

TabPanel.propTypes = {
    contextCls: PropTypes.string,
    tabId: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};

export default TabPanel;
