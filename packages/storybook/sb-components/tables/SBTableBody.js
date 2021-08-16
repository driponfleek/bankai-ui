import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { BASE_CSS_CLASS } from './const/tabelConst';

const SBTableBody = (props) => {
    const { contextCls, children } = props;
    const baseCls = `${BASE_CSS_CLASS}__tbody`;

    return <tbody className={cx(baseCls, contextCls)}>{children}</tbody>;
};

SBTableBody.defaultProps = {};

SBTableBody.propTypes = {
    contextCls: PropTypes.string,
};

export default SBTableBody;
