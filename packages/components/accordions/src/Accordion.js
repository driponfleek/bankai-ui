import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import AccordionItemPanel from './AccordionItemPanel';
import AccordionItemTrigger from './AccordionItemTrigger';

// styles
import './styles/accordion.scss';

class Accordion extends PureComponent {
    static defaultProps = {
        headingLvl: 3,
        shouldAllowMultipleExpanded: false,
        shouldAllowZeroExpanded: true,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        headingLvl: PropTypes.number,
        shouldAllowMultipleExpanded: PropTypes.bool,
        shouldAllowZeroExpanded: PropTypes.bool,
        preExpanded: PropTypes.array,
        renderTrigger: PropTypes.func,
        renderTriggerIcon: PropTypes.func,
        onChange: PropTypes.func,
    };

    render() {
        const {
            contextCls,
            shouldAllowMultipleExpanded,
            shouldAllowZeroExpanded,
            preExpanded,
        } = this.props;
        const childItems = this.prepChildren().map((item) =>
            this.renderItem(item),
        );

        return (
            <AccordionWrapper
                contextCls={cx(this.baseCls, contextCls)}
                shouldAllowMultipleExpanded={shouldAllowMultipleExpanded}
                shouldAllowZeroExpanded={shouldAllowZeroExpanded}
                preExpanded={preExpanded}
                onChange={this.handleChange}
            >
                {childItems}
            </AccordionWrapper>
        );
    }

    renderItem = (item) => {
        const { renderTrigger } = this.props;
        const { props: itemProps } = item || {};
        const { accItemProps, accTriggerProps } = itemProps || {};
        const { id } = accItemProps || {};
        const triggerRenderer = renderTrigger || this.renderTrigger;

        return (
            <AccordionItem key={id} {...accItemProps}>
                {triggerRenderer(accTriggerProps)}
                <AccordionItemPanel>{item}</AccordionItemPanel>
            </AccordionItem>
        );
    };

    renderTrigger = (accTriggerProps) => {
        const { headingLvl, renderTriggerIcon } = this.props;
        const { children, headingProps, ...rest } = accTriggerProps || {};
        const { headingLvl: hpHeadingLvl } = headingProps || {};
        const hProps = {
            ...headingProps,
            headingLvl: hpHeadingLvl || headingLvl,
        };

        return (
            <AccordionItemTrigger
                renderTriggerIcon={renderTriggerIcon}
                headingProps={hProps}
                {...rest}
            >
                {children}
            </AccordionItemTrigger>
        );
    };

    handleChange = (expandedIds) => {
        const { onChange } = this.props;

        onChange(expandedIds);
    };

    prepChildren = () => {
        const { children } = this.props;

        if (!children) {
            return [];
        }

        return Array.isArray(children) ? children : [children];
    };

    baseCls = 'bankai-accordion';
}

export default Accordion;
