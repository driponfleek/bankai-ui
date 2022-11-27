import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    AccordionItemState,
    AccordionItemHeading,
    AccordionItemButton,
} from '@epr0t0type/bankai-ui-accordions';
import { BankaiDash, BankaiPlus } from '@epr0t0type/bankai-ui-icons';

class CustomTrigger extends PureComponent {
    static defaultProps = {
        buttonProps: {},
        headingProps: {},
    };

    static propTypes = {
        contextCls: PropTypes.string,
        buttonProps: PropTypes.object,
        headingProps: PropTypes.object,
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
                {this.renderTriggerIcon(isExpanded)}
                <div className={`${this.baseCls}__text-container`}>
                    <div className={`${this.baseCls}__text`}>{children}</div>
                </div>
            </AccordionItemButton>
        );
    };

    renderTriggerIcon = (isExpanded) => {
        const Icon = isExpanded ? BankaiDash : BankaiPlus;
        const triggerIconCls = `${this.baseCls}__icon`;

        return (
            <div className={`${triggerIconCls}-container`}>
                <Icon contextCls={triggerIconCls} />
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
}

export default CustomTrigger;
