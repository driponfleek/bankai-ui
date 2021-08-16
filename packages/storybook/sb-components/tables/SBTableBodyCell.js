import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { BASE_CSS_CLASS } from './const/tabelConst';

const SBTableBodyCell = (props) => {
    const { contextCls, isCentered, children } = props;
    const baseCls = `${BASE_CSS_CLASS}__td`;
    const modCls = {
        [`${baseCls}--center`]: isCentered,
    };

    return <td className={cx(baseCls, modCls, contextCls)}>{children}</td>;
};

SBTableBodyCell.defaultProps = {
    isCentered: false,
};

SBTableBodyCell.propTypes = {
    contextCls: PropTypes.string,
    isCentered: PropTypes.bool,
};

export default SBTableBodyCell;
