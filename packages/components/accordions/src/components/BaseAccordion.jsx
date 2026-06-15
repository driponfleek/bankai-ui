import cx from 'classnames';
import AccordionWrapper from '../AccordionWrapper';
import BaseAccordionChildren from './BaseAccordionChildren';

// Constants
import { ACCORDION_BASE_BASE_CLS } from '../const/baseClsConst';

// styles
import './styles/base-accordion.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {number} [props.headingLvl] - Heading level for the accordion item headings
 * @param {boolean} [props.shouldAllowMultipleExpanded] - Whether multiple accordion items can be expanded simultaneously
 * @param {boolean} [props.shouldAllowZeroExpanded] - Whether all accordion items can be collapsed simultaneously
 * @param {Array} [props.preExpanded] - Array of item IDs that should be expanded on initial render
 * @param {Function} [props.renderTrigger] - Custom render function for the accordion trigger
 * @param {Function} [props.renderTriggerIcon] - Custom render function for the accordion trigger icon
 * @param {Function} [props.onChange] - Callback fired when the expanded items change
 */
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

export default BaseAccordion;
