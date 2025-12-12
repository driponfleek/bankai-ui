import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionWrapper from '../AccordionWrapper';
import BaseAccordionChildren from './BaseAccordionChildren';

// Constants
import { ACCORDION_BASE_BASE_CLS } from '../const/baseClsConst';

// styles
import './styles/base-accordion.scss';

const BaseAccordion = (props) => {
    const {
        contextCls,
        headingLvl = 3,
        shouldAllowMultipleExpanded = false,
        shouldAllowZeroExpanded = true,
        preExpanded,
        renderTrigger,
        renderTriggerIcon,
        onChange = BaseAccordion.onChange,
        children,
    } = props;
    const handleChange = (expandedIds) => {
        onChange(expandedIds);
    };

    return (
        <AccordionWrapper
            contextCls={cx(ACCORDION_BASE_BASE_CLS, contextCls)}
            shouldAllowMultipleExpanded={shouldAllowMultipleExpanded}
            shouldAllowZeroExpanded={shouldAllowZeroExpanded}
            preExpanded={preExpanded}
            onChange={handleChange}
        >
            <BaseAccordionChildren
                headingLvl={headingLvl}
                renderTrigger={renderTrigger}
                renderTriggerIcon={renderTriggerIcon}
            >
                {children}
            </BaseAccordionChildren>
        </AccordionWrapper>
    );
};

BaseAccordion.onChange = () => Promise.resolve();

BaseAccordion.propTypes = {
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
    shouldAllowMultipleExpanded: PropTypes.bool,
    shouldAllowZeroExpanded: PropTypes.bool,
    preExpanded: PropTypes.array,
    renderTrigger: PropTypes.func,
    renderTriggerIcon: PropTypes.func,
    onChange: PropTypes.func,
};

export default BaseAccordion;
