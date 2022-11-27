import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItemHeading as AccItemHeading } from 'react-accessible-accordion';

// Styles
import './styles/accordion-item-heading.scss';

const AccordionItemHeading = (props) => {
    const { contextCls, headingLvl, ...rest } = props;
    const baseCls = 'bankai-accordion-item-heading';

    return (
        <AccItemHeading
            {...rest}
            className={cx(baseCls, contextCls)}
            aria-level={headingLvl}
        />
    );
};

AccordionItemHeading.defaultProps = {
    headingLvl: 3,
};

AccordionItemHeading.propTypes = {
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
};

export default AccordionItemHeading;
