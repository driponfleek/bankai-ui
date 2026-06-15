import cx from 'classnames';
import { TabList as ARIATabList } from 'react-aria-tabpanel';
import Tab from './Tab';

// Styles
import './styles/tabs-list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Array} [props.tabs] - Array of tab configuration objects
 * @param {Function} [props.renderTab] - Custom render function for individual tabs
 */
const TabsList = (props) => {
    const { contextCls, tabs = [], renderTab, ...rest } = props;
    const baseCls = 'bankai-tabs-list';
    const renderDefaultTab = (tab) => <Tab {...tab} />;
    const tabRenderer = renderTab || renderDefaultTab;

    return (
        <ARIATabList className={cx(baseCls, contextCls)} {...rest}>
            {tabs.map((tab) => tabRenderer({ ...tab, key: tab?.id }))}
        </ARIATabList>
    );
};

export default TabsList;
