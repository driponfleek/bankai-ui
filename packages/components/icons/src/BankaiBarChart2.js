import React from 'react';
import PropTypes from 'prop-types';
import { FiBarChart2 } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiBarChart2 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiBarChart2
            {...rest}
            className={classNameUtil(
                `${baseCls}-bar-chart-2`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiBarChart2.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiBarChart2;
