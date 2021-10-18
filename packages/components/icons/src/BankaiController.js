import React from 'react';
import PropTypes from 'prop-types';
import { BsController } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiController = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsController
            {...rest}
            className={classNameUtil(
                `${baseCls}-controller`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiController.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiController;
