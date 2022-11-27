import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItemButton as AccItemBtn } from 'react-accessible-accordion';

// Styles
import './styles/accordion-item-button.scss';

const AccordionItemButton = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-accordion-item-button';

    return <AccItemBtn {...rest} className={cx(baseCls, contextCls)} />;
};

AccordionItemButton.propTypes = {
    contextCls: PropTypes.string,
};

export default AccordionItemButton;
