import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getIsReadable } from '@epr0t0type/bankai-lib-color-utils';
import ColorCompatibilitiesList from './ColorCompatibilitiesList';

// Styles
import './styles/color-swatch-detailed.scss';

class ColorSwatchDetailed extends Component {
    static defaultProps = {};

    static propTypes = {
        contextCls: PropTypes.string,
        colorName: PropTypes.string,
        colorData: PropTypes.shape({
            hex: PropTypes.string,
            hsl: PropTypes.shape({
                h: PropTypes.number,
                s: PropTypes.number,
                l: PropTypes.number,
            }),
            rgb: PropTypes.shape({
                r: PropTypes.number,
                g: PropTypes.number,
                b: PropTypes.number,
            }),
            id: PropTypes.string,
            isDark: PropTypes.bool,
        }),
    };

    render() {
        const { contextCls, colorName, colorData } = this.props;
        const { compatibleTextColors, compatibleNonTextColors } =
            colorData || {};
        const defaultTextColor =
            this.getTextColor() === '#000000' ? 'Black' : 'White';
        const modCls = this.getModCls();
        const style = this.getSwatchStyle();
        const shouldRenderDetails = this.getShouldRenderColorDetails();
        // console.log('colorData: ', colorData);

        return (
            <div className={cx(this.baseCls, modCls, contextCls)} style={style}>
                <div className={`${this.baseCls}__info-container`}>
                    <p className={`${this.baseCls}__name`}>{colorName}</p>
                    {shouldRenderDetails && this.renderDetails()}
                </div>
                <ColorCompatibilitiesList
                    defaultTextColor={defaultTextColor}
                    compatibleTextColors={compatibleTextColors}
                    compatibleNonTextColors={compatibleNonTextColors}
                />
            </div>
        );
    }

    renderDetails = () => {
        const { colorData } = this.props;
        const { hex, /* rgbString, */ hslString } = colorData || {};

        return (
            <span className={`${this.baseCls}__details`}>
                {hex && <span className={`${this.baseCls}__hex`}>{hex}</span>}
                {/* {rgbString && (
                    <span className={`${this.baseCls}__rgb`}>{rgbString}</span>
                )} */}
                {hslString && (
                    <span className={`${this.baseCls}__hsl`}>{hslString}</span>
                )}
            </span>
        );
    };

    getShouldRenderColorDetails = () => {
        const { colorData } = this.props;
        const { hex, rgbString, hslString } = colorData || {};

        return !!hex || !!rgbString || !!hslString;
    };

    getModCls = () => {
        const textColor = this.getTextColor();
        const isDark = textColor === '#000000';

        return {
            [`${this.baseCls}--dark-text`]: isDark,
            [`${this.baseCls}--light-text`]: !isDark,
        };
    };

    getTextColor = () => {
        const { colorData } = this.props;
        const { hex } = colorData || {};
        const isReadableWithWhiteText = getIsReadable('#ffffff', hex);

        return isReadableWithWhiteText ? '#ffffff' : '#000000';
    };

    getSwatchStyle = () => {
        const { colorData } = this.props;
        const { hex } = colorData || {};
        const textColor = this.getTextColor();

        return {
            color: textColor,
            backgroundColor: hex,
        };
    };

    baseCls = 'bankai-sb-color-swatch-detailed';
}

export default ColorSwatchDetailed;
