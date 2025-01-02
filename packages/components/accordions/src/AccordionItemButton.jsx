import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItemButton as AccItemBtn } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/accordion-item-button.scss';

const AccordionItemButton = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item-button`;

    return <AccItemBtn {...rest} className={cx(baseCls, contextCls)} />;
};

AccordionItemButton.propTypes = {
    contextCls: PropTypes.string,
};

export default AccordionItemButton;
