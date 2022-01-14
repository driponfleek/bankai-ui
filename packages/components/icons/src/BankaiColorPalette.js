import React from 'react';
import PropTypes from 'prop-types';
import { IoColorPaletteOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiColorPalette = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoColorPaletteOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-color-palette`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiColorPalette.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiColorPalette;
