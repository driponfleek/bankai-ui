import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TabPanel from './TabPanel';
import TabsList from './TabsList';
import TabsWrapper from './TabsWrapper';

// Constants
import VARIANTS from './const/variantsConst';

// Styles
import './styles/tabs.scss';

const { OVERLINE_SEGMENTED } = VARIANTS;

class Tabs extends Component {
    static defaultProps = {
        variant: OVERLINE_SEGMENTED,
        hasMicrointeractions: true,
        isVerticalTabs: false,
        shouldAllowLetterNavigation: false,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        activeTabId: PropTypes.string,
        contextCls: PropTypes.string,
        variant: PropTypes.string,
        hasMicrointeractions: PropTypes.bool,
        isVerticalTabs: PropTypes.bool,
        shouldAllowLetterNavigation: PropTypes.bool,
        onChange: PropTypes.func,
        renderTab: PropTypes.func,
    };

    render() {
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
        } = this.props;
        const panels = this.prepChildren();
        const tabs = this.getTabs(panels);
        const modCls = this.getModCls();

        return (
            <TabsWrapper
                {...rest}
                contextCls={cx(this.baseCls, modCls, contextCls)}
                shouldAllowLetterNavigation={shouldAllowLetterNavigation}
                onChange={onChange}
            >
                <div className={`${this.baseCls}__tabs-list-container`}>
                    <TabsList tabs={tabs} renderTab={renderTab} />
                </div>
                {panels && (
                    <div className={`${this.baseCls}__content-container`}>
                        {panels.map((panel) => this.renderPanel(panel))}
                    </div>
                )}
            </TabsWrapper>
        );
    }

    renderPanel = (panel) => {
        const { props } = panel || {};
        const { tabProps, panelProps } = props || {};
        const { isActive, id } = tabProps || {};

        return (
            <TabPanel key={id} tabId={id} isActive={isActive} {...panelProps}>
                {panel}
            </TabPanel>
        );
    };

    getIsChildrenArr = () => {
        const { children } = this.props;

        return Array.isArray(children);
    };

    // getActiveTab = (tabs) => {
    //     return tabs.find((tab) => tab.isActive);
    // };

    getTabs = (panels) => {
        return (panels || []).map((panel) => {
            const { props } = panel || {};
            const { tabProps } = props || {};

            return tabProps;
        });
    };

    getModCls = () => {
        const { hasMicrointeractions, isVerticalTabs, variant } = this.props;
        const variantModCls = {};
        const VARIANT_KEYS = Object.keys(VARIANTS);

        for (let index = 0; index < VARIANT_KEYS.length; index += 1) {
            const VARIANT_KEY = VARIANT_KEYS[index];
            variantModCls[
                `${this.baseCls}--${VARIANT_KEY.replace(
                    /(_)/,
                    '-',
                ).toLowerCase()}`
            ] = variant === VARIANT_KEY;
        }

        return {
            ...variantModCls,
            [`${this.baseCls}--has-microinteractions`]: hasMicrointeractions,
            [`${this.baseCls}--is-vertical-tabs`]: isVerticalTabs,
        };
    };

    prepChildren = () => {
        const { children } = this.props;
        const isChildrenArr = this.getIsChildrenArr();

        return isChildrenArr ? children.filter((child) => !!child) : [children];
    };

    baseCls = 'bankai-tabs';
}

export default Tabs;
