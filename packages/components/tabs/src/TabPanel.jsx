import cx from 'classnames';
import { TabPanel as ARIATabPanel } from 'react-aria-tabpanel';

// Styles
import './styles/tab-panel.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} props.tabId - ID of the associated tab that controls this panel
 * @param {boolean} [props.isActive] - Whether this panel is currently visible
 */
const TabPanel = (props) => {
    const { contextCls, tabId, isActive = false, children, ...rest } = props;
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

export default TabPanel;
