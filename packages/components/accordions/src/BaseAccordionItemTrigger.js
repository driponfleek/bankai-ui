import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiChevronDown } from '@epr0t0type/bankai-ui-icons';
import { AccordionItemState } from 'react-accessible-accordion';
import AccordionItemHeading from './AccordionItemHeading';
import AccordionItemButton from './AccordionItemButton';

// Styles
import './styles/base-accordion-item-trigger.scss';

class BaseAccordionItemTrigger extends PureComponent {
    static defaultProps = {
        buttonProps: {},
        headingProps: {},
    };

    static propTypes = {
        contextCls: PropTypes.string,
        buttonProps: PropTypes.shape({
            contextCls: PropTypes.string,
        }),
        headingProps: PropTypes.object,
        renderTriggerIcon: PropTypes.func,
    };

    render() {
        const { contextCls, headingProps } = this.props;
        const { contextCls: headingContextCls, ...headingRest } = headingProps;

        return (
            <AccordionItemHeading
                {...headingRest}
                contextCls={cx(this.baseCls, headingContextCls, contextCls)}
            >
                <AccordionItemState>{this.renderButton}</AccordionItemState>
            </AccordionItemHeading>
        );
    }

    renderButton = (state = {}) => {
        const { buttonProps, children } = this.props;
        const { contextCls: btnContextCls } = buttonProps;
        const { expanded: isExpanded } = state;
        const modCls = this.getModCls(isExpanded);

        return (
            <AccordionItemButton
                {...buttonProps}
                contextCls={cx(modCls, btnContextCls)}
            >
                <div className={`${this.baseCls}__text-container`}>
                    <div className={`${this.baseCls}__text`}>{children}</div>
                </div>
                {this.renderTriggerIcon(isExpanded)}
            </AccordionItemButton>
        );
    };

    renderTriggerIcon = (isExpanded) => {
        const { renderTriggerIcon } = this.props;
        const triggerIconRenderer =
            renderTriggerIcon || this.renderDefaultTriggerIcon;

        return triggerIconRenderer({
            isExpanded,
            triggerIconCls: this.triggerIconCls,
            triggerIconContainerCls: `${this.triggerIconCls}-container`,
        });
    };

    renderDefaultTriggerIcon = ({
        triggerIconCls,
        triggerIconContainerCls,
    }) => {
        return (
            <div className={triggerIconContainerCls}>
                <BankaiChevronDown contextCls={triggerIconCls} />
            </div>
        );
    };

    getModCls = (isExpanded) => {
        const { contextCls } = this.props;

        return {
            [`${this.baseCls}--is-expanded`]: isExpanded,
            [`${this.baseCls}--is-collapsed`]: !isExpanded,
            ...(contextCls && {
                [`${contextCls}--is-expanded`]: isExpanded,
                [`${contextCls}--is-collapsed`]: !isExpanded,
            }),
        };
    };

    baseCls = 'bankai-base-accordion-item-trigger';

    triggerIconCls = `${this.baseCls}__icon`;
}

export default BaseAccordionItemTrigger;
