import cx from 'classnames';
import { AccordionItemHeading as AccItemHeading } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {number} [props.headingLvl] - Heading level for the accordion item heading
 */
const AccordionItemHeading = (props) => {
    const { contextCls, headingLvl = 3, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item-heading`;

    return (
        <AccItemHeading
            {...rest}
            className={cx(baseCls, contextCls)}
            aria-level={headingLvl}
        />
    );
};

export default AccordionItemHeading;
