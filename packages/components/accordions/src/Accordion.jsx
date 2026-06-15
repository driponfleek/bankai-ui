import cx from 'classnames';
import AccordionItemTrigger from './AccordionItemTrigger';
import BaseAccordion from './components/BaseAccordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

// styles
import './styles/accordion.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {number} [props.headingLvl] - Heading level for the accordion item heading
 * @param {Function} [props.renderTrigger] - Custom render function for the accordion trigger
 * @param {Function} [props.renderTriggerIcon] - Custom render function for the accordion trigger icon
 */
const Accordion = (props) => {
    const {
        contextCls,
        renderTrigger,
        headingLvl = 3,
        renderTriggerIcon,
        ...rest
    } = props;
    const baseCls = ACCORDION_BASE_CLS;
    const renderAccTrigger = (accTriggerProps) => {
        const { children, headingProps, ...triggerRest } =
            accTriggerProps || {};
        const { headingLvl: hpHeadingLvl } = headingProps || {};
        const hProps = {
            ...headingProps,
            headingLvl: hpHeadingLvl || headingLvl,
        };

        return (
            <AccordionItemTrigger
                renderTriggerIcon={renderTriggerIcon}
                headingProps={hProps}
                {...triggerRest}
            >
                {children}
            </AccordionItemTrigger>
        );
    };

    return (
        <BaseAccordion
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            headingLvl={headingLvl}
            renderTrigger={renderTrigger ?? renderAccTrigger}
            renderTriggerIcon={renderTriggerIcon}
        />
    );
};

export default Accordion;
