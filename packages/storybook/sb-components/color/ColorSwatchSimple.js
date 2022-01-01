import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/color-swatch-simple.scss';

const ColorSwatchSimple = (props) => {
    const { contextCls, colorDescription, colorName, colorValue } = props;
    const baseCls = 'bankai-sb-color-swatch-simple';
    const style = { backgroundColor: colorValue };

    return (
        <div className={cx(baseCls, contextCls)}>
            <div className={`${baseCls}__swatch-container`}>
                <div className={`${baseCls}__swatch`} style={style} />
            </div>
            <div className={`${baseCls}__details-container`}>
                {colorName && (
                    <p className={`${baseCls}__name`}>
                        <strong>{colorName}</strong>
                    </p>
                )}
                {colorDescription && (
                    <p className={`${baseCls}__desc`}>{colorDescription}</p>
                )}
            </div>
        </div>
    );
};

ColorSwatchSimple.defaultProps = {};

ColorSwatchSimple.propTypes = {
    colorDescription: PropTypes.string,
    colorName: PropTypes.string,
    colorValue: PropTypes.string,
    contextCls: PropTypes.string,
};

export default ColorSwatchSimple;
