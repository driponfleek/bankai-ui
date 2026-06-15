import cx from 'classnames';
import { AccordionItem as AccItem } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - Unique identifier for the accordion item, used as the accordion panel's UUID
 * @param {boolean} [props.shouldDangerouslySetExpanded] - Forces the expanded state of the accordion item
 */
const AccordionItem = (props) => {
    const { contextCls, id, shouldDangerouslySetExpanded, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item`;

    return (
        <AccItem
            {...rest}
            className={cx(baseCls, contextCls)}
            uuid={id}
            dangerouslySetExpanded={shouldDangerouslySetExpanded}
        />
    );
};

export default AccordionItem;
