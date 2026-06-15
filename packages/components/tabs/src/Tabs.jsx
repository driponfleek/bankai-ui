import { Children } from 'react';
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

/**
 * @param {Object} props
 * @param {string} [props.activeTabId] - ID of the currently active tab
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.variant] - Visual variant of the tabs
 * @param {boolean} [props.hasMicrointeractions] - Whether to enable microinteraction animations
 * @param {boolean} [props.isVerticalTabs] - Whether to render tabs in a vertical layout
 * @param {boolean} [props.shouldAllowLetterNavigation] - Whether to enable keyboard letter navigation between tabs
 * @param {Function} [props.onChange] - Callback fired when the active tab changes
 * @param {Function} [props.renderTab] - Custom render function for individual tabs
 */
const Tabs = (props) => {
    const {
        contextCls,
        hasMicrointeractions = true,
        isVerticalTabs = false,
        shouldAllowLetterNavigation = false,
        onChange = Tabs.onChange,
        renderTab,
        variant = OVERLINE_SEGMENTED,
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-tabs';
    const panels = Children.toArray(children);
    const tabs = getTabs(panels);
    const modCls = getModCls(
        {
            ...rest,
            contextCls,
            hasMicrointeractions,
            isVerticalTabs,
            shouldAllowLetterNavigation,
            onChange,
            renderTab,
            variant,
            children,
        },
        baseCls,
    );
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

Tabs.onChange = () => Promise.resolve();

export default Tabs;
