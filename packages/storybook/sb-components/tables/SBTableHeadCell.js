import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { BASE_CSS_CLASS } from './const/tabelConst';

const SBTableHeadCell = (props) => {
    const { contextCls, isCentered, children } = props;
    const modCls = {};
    const baseCls = `${BASE_CSS_CLASS}__th`;
    modCls[`${baseCls}--center`] = isCentered;

    return <th className={cx(baseCls, modCls, contextCls)}>{children}</th>;
};

SBTableHeadCell.defaultProps = {
    isCentered: false,
};

SBTableHeadCell.propTypes = {
    contextCls: PropTypes.string,
    isCentered: PropTypes.bool,
};

export default SBTableHeadCell;
