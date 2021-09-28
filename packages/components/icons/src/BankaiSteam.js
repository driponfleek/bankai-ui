import React from 'react';
import PropTypes from 'prop-types';
import { RiSteamFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSteam = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiSteamFill
            {...rest}
            className={classNameUtil(`${baseCls}-text-steam`, className, contextCls)}
        />
    );
};

BankaiSteam.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSteam;
