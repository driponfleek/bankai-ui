import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseAccordionItemTrigger from './components/BaseAccordionItemTrigger';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/accordion-item-trigger.scss';

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

AccordionItemTrigger.propTypes = {
    contextCls: PropTypes.string,
};

export default AccordionItemTrigger;
