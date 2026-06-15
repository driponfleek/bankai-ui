import cx from 'classnames';
import { AccordionItemPanel as AccItemPanel } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.shouldHaveRegionRole] - Whether to apply the ARIA region role to the panel
 */
const AccordionItemPanel = (props) => {
    const { contextCls, shouldHaveRegionRole = true, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item-panel`;

    return (
        <AccItemPanel
            {...rest}
            className={cx(baseCls, contextCls)}
            region={shouldHaveRegionRole}
        />
    );
};

export default AccordionItemPanel;
