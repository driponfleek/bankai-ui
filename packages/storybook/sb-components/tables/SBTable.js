import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { BASE_CSS_CLASS } from './const/tabelConst';

// Styles
import './styles/sb-table.scss';

const SBTable = (props) => {
    const { contextCls, children } = props;

    return <table className={cx(BASE_CSS_CLASS, contextCls)}>{children}</table>;
};

SBTable.defaultProps = {};

SBTable.propTypes = {
    contextCls: PropTypes.string,
};

export default SBTable;
