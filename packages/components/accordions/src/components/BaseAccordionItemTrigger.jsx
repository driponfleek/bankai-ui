import cx from 'classnames';
import { AccordionItemState } from 'react-accessible-accordion';
import AccordionItemHeading from '../AccordionItemHeading';
import BaseAccordionItemTriggerButton from './BaseAccordionItemTriggerButton';

// Styles
import './styles/base-accordion-item-trigger.scss';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {number} [props.headingLvl] - Heading level for the accordion item heading
 * @param {Object} [props.buttonProps] - Props forwarded to the trigger button; supports `contextCls` for additional CSS class names
 * @param {Object} [props.headingProps] - Props forwarded to the accordion item heading
 * @param {Function} [props.renderTriggerIcon] - Custom render function for the accordion trigger icon
 */
const BaseAccordionItemTrigger = (props) => {
    const {
        baseCls,
        contextCls,
        headingLvl = 3,
        buttonProps = {},
        headingProps = {},
        renderTriggerIcon,
        children,
    } = props;
    const { contextCls: headingContextCls, ...headingRest } = headingProps;
    const { contextCls: btnContextCls, ...btnRest } = buttonProps;
    const renderBtn = (state = {}) => (
        <BaseAccordionItemTriggerButton
            isExpanded={state.expanded}
            baseCls={baseCls}
            contextCls={btnContextCls}
            buttonProps={btnRest}
            renderTriggerIcon={renderTriggerIcon}
        >
            {children}
        </BaseAccordionItemTriggerButton>
    );

    return (
        <AccordionItemHeading
            headingLvl={headingLvl}
            {...headingRest}
            contextCls={cx(
                `${baseCls}__item-trigger`,
                headingContextCls,
                contextCls,
            )}
        >
            <AccordionItemState>{renderBtn}</AccordionItemState>
        </AccordionItemHeading>
    );
};

export default BaseAccordionItemTrigger;
