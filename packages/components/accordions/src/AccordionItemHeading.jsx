import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItemHeading as AccItemHeading } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

const AccordionItemHeading = (props) => {
    const { contextCls, headingLvl, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item-heading`;

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
