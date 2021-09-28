import React from 'react';
import PropTypes from 'prop-types';
import { BsFilm } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiFilm = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsFilm
            {...rest}
            className={classNameUtil(`${baseCls}-film`, className, contextCls)}
        />
    );
};

BankaiFilm.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFilm;
