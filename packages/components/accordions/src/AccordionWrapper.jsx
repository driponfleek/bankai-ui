import cx from 'classnames';
import { Accordion } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.shouldAllowMultipleExpanded] - Whether multiple accordion items can be expanded simultaneously
 * @param {boolean} [props.shouldAllowZeroExpanded] - Whether all accordion items can be collapsed simultaneously
 * @param {Array} [props.preExpanded] - Array of item IDs that should be expanded on initial render
 * @param {Function} [props.onChange] - Callback fired when the expanded items change
 */
const AccordionWrapper = (props) => {
    const {
        contextCls,
        shouldAllowMultipleExpanded,
        shouldAllowZeroExpanded,
        ...rest
    } = props;
    const baseCls = `${ACCORDION_BASE_CLS}-wrapper`;

    return (
        <Accordion
            {...rest}
            className={cx(baseCls, contextCls)}
            allowMultipleExpanded={shouldAllowMultipleExpanded}
            allowZeroExpanded={shouldAllowZeroExpanded}
        />
    );
};

export default AccordionWrapper;
