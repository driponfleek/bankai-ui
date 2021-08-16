import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { BASE_CSS_CLASS } from './const/tabelConst';

const SBTableHead = (props) => {
    const { contextCls, children } = props;
    const baseCls = `${BASE_CSS_CLASS}__thead`;

    return <thead className={cx(baseCls, contextCls)}>{children}</thead>;
};

SBTableHead.defaultProps = {};

SBTableHead.propTypes = {
    contextCls: PropTypes.string,
};

export default SBTableHead;
