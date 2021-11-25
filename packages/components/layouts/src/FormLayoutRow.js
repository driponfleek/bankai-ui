import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-layout-row.scss';

const FormLayoutRow = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-row';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

FormLayoutRow.defaultProps = {};

FormLayoutRow.propTypes = {
    contextCls: PropTypes.string,
};

export default FormLayoutRow;
