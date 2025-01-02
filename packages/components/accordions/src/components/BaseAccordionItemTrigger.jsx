import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItemState } from 'react-accessible-accordion';
import AccordionItemHeading from '../AccordionItemHeading';
import BaseAccordionItemTriggerButton from './BaseAccordionItemTriggerButton';

// Styles
import './styles/base-accordion-item-trigger.scss';

const BaseAccordionItemTrigger = (props) => {
    const {
        baseCls,
        contextCls,
        headingLvl,
        buttonProps,
        headingProps,
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

BaseAccordionItemTrigger.defaultProps = {
    headingLvl: 3,
    buttonProps: {},
    headingProps: {},
};

BaseAccordionItemTrigger.propTypes = {
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
    buttonProps: PropTypes.shape({
        contextCls: PropTypes.string,
    }),
    headingProps: PropTypes.object,
    renderTriggerIcon: PropTypes.func,
};

export default BaseAccordionItemTrigger;
