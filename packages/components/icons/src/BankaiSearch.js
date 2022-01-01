import React from 'react';
import PropTypes from 'prop-types';
import { CgSearch } from 'react-icons/cg';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSearch = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CgSearch
            {...rest}
            className={classNameUtil(
                `${baseCls}-search`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSearch.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSearch;
