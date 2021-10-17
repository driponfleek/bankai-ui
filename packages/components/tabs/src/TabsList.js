import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TabList as ARIATabList } from 'react-aria-tabpanel';
import Tab from './Tab';

// Styles
import './styles/tabs-list.scss';

class TabsList extends PureComponent {
    static defaultProps = {
        tabs: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        tabs: PropTypes.array,
        renderTab: PropTypes.func,
    };

    render() {
        const { contextCls, tabs, renderTab, ...rest } = this.props;

        return (
            <ARIATabList className={cx(this.baseCls, contextCls)} {...rest}>
                {tabs.map((tab) => this.renderListItem(tab))}
            </ARIATabList>
        );
    }

    renderListItem = (tab) => {
        const { renderTab } = this.props;
        const { id } = tab || {};
        const tabRenderer = renderTab || this.renderTab;

        return tabRenderer({ ...tab, key: id });
    };

    renderTab = (tab) => <Tab {...tab} />;

    baseCls = 'bankai-tabs-list';
}

export default TabsList;
