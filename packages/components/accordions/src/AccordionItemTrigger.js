import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseAccordionItemTrigger from './BaseAccordionItemTrigger';

// Styles
import './styles/accordion-item-trigger.scss';

const AccordionItemTrigger = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-accordion-item-trigger';

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
