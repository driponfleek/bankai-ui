import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { BASE_CSS_CLASS } from './const/tabelConst';

const SBTableRow = (props) => {
    const { contextCls, isAlt, isHeaderRow, children } = props;
    const baseCls = `${BASE_CSS_CLASS}__tr`;
    const modCls = {
        [`${baseCls}--alt`]: isAlt,
        [`${baseCls}-header`]: isHeaderRow,
    };

    return <tr className={cx(baseCls, modCls, contextCls)}>{children}</tr>;
};

SBTableRow.defaultProps = {
    isAlt: false,
    isHeaderRow: false,
};

SBTableRow.propTypes = {
    contextCls: PropTypes.string,
    isAlt: PropTypes.bool,
    isHeaderRow: PropTypes.bool,
};

export default SBTableRow;
