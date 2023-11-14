import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TabPanel from './TabPanel';
import TabsList from './TabsList';
import TabsWrapper from './TabsWrapper';

// Utils
import { getTabs, getModCls } from './utils/tabsUtils';

// Constants
import VARIANTS from './const/variantsConst';

// Styles
import './styles/tabs.scss';

const { OVERLINE_SEGMENTED } = VARIANTS;

const Tabs = (props) => {
    const {
        contextCls,
        hasMicrointeractions,
        isVerticalTabs,
        shouldAllowLetterNavigation,
        onChange,
        renderTab,
        variant,
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-tabs';
    const panels = Children.toArray(children);
    const tabs = getTabs(panels);
    const modCls = getModCls(props, baseCls);
    const renderPanel = (panel) => {
        const { props: itemProps } = panel || {};
        const { tabProps, panelProps } = itemProps || {};
        const { isActive, id } = tabProps || {};

        return (
            <TabPanel key={id} tabId={id} isActive={isActive} {...panelProps}>
                {panel}
            </TabPanel>
        );
    };

    return (
        <TabsWrapper
            {...rest}
            contextCls={cx(baseCls, modCls, contextCls)}
            shouldAllowLetterNavigation={shouldAllowLetterNavigation}
            onChange={onChange}
        >
            <div className={`${baseCls}__tabs-list-container`}>
                <TabsList tabs={tabs} renderTab={renderTab} />
            </div>
            {panels && (
                <div className={`${baseCls}__content-container`}>
                    {panels.map((panel) => renderPanel(panel))}
                </div>
            )}
        </TabsWrapper>
    );
};

Tabs.defaultProps = {
    variant: OVERLINE_SEGMENTED,
    hasMicrointeractions: true,
    isVerticalTabs: false,
    shouldAllowLetterNavigation: false,
    onChange: () => Promise.resolve(),
};

Tabs.propTypes = {
    activeTabId: PropTypes.string,
    contextCls: PropTypes.string,
    variant: PropTypes.string,
    hasMicrointeractions: PropTypes.bool,
    isVerticalTabs: PropTypes.bool,
    shouldAllowLetterNavigation: PropTypes.bool,
    onChange: PropTypes.func,
    renderTab: PropTypes.func,
};

export default Tabs;
