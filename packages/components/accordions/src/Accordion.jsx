import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionItemTrigger from './AccordionItemTrigger';
import BaseAccordion from './components/BaseAccordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

// styles
import './styles/accordion.scss';

const Accordion = (props) => {
    const {
        contextCls,
        renderTrigger,
        headingLvl,
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

Accordion.defaultProps = {
    headingLvl: 3,
};

Accordion.propTypes = {
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
    renderTrigger: PropTypes.func,
    renderTriggerIcon: PropTypes.func,
};

export default Accordion;
