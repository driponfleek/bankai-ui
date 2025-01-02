import PropTypes from 'prop-types';
import cx from 'classnames';
import { TabList as ARIATabList } from 'react-aria-tabpanel';
import Tab from './Tab';

// Styles
import './styles/tabs-list.scss';

const TabsList = (props) => {
    const { contextCls, tabs, renderTab, ...rest } = props;
    const baseCls = 'bankai-tabs-list';
    const renderDefaultTab = (tab) => <Tab {...tab} />;
    const tabRenderer = renderTab || renderDefaultTab;

    return (
        <ARIATabList className={cx(baseCls, contextCls)} {...rest}>
            {tabs.map((tab) => tabRenderer({ ...tab, key: tab?.id }))}
        </ARIATabList>
    );
};

TabsList.defaultProps = {
    tabs: [],
};

TabsList.propTypes = {
    contextCls: PropTypes.string,
    tabs: PropTypes.array,
    renderTab: PropTypes.func,
};

export default TabsList;
