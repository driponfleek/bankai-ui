import cx from 'classnames';
import BaseAccordionItemTrigger from './components/BaseAccordionItemTrigger';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/accordion-item-trigger.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const AccordionItemTrigger = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item-trigger`;

    return (
        <BaseAccordionItemTrigger
            {...rest}
            contextCls={cx(baseCls, contextCls)}
        />
    );
};

export default AccordionItemTrigger;
