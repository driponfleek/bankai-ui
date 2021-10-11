import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Accordion } from 'react-accessible-accordion';

const AccordionWrapper = (props) => {
    const {
        contextCls,
        shouldAllowMultipleExpanded,
        shouldAllowZeroExpanded,
        ...rest
    } = props;
    const baseCls = 'bankai-accordion-wrapper';

    return (
        <Accordion
            {...rest}
            className={cx(baseCls, contextCls)}
            allowMultipleExpanded={shouldAllowMultipleExpanded}
            allowZeroExpanded={shouldAllowZeroExpanded}
        />
    );
};

AccordionWrapper.propTypes = {
    contextCls: PropTypes.string,
    shouldAllowMultipleExpanded: PropTypes.bool,
    shouldAllowZeroExpanded: PropTypes.bool,
    preExpanded: PropTypes.array,
    onChange: PropTypes.func,
};

export default AccordionWrapper;
