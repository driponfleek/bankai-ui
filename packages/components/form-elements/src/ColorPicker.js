import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { RgbColorPicker, RgbaColorPicker } from 'react-colorful';
import {
    convertColorToRGB,
    convertColorToHex,
} from '@epr0t0type/bankai-lib-color-utils';

// Utils
import { onChangeCompleteDebounce } from './utils/performanceUtils';

// Styles
import './styles/color-picker.scss';

class ColorPicker extends PureComponent {
    static defaultProps = {
        changeCompleteThreshold: 200,
        hasAlpha: false,
        onChange: () => Promise.resolve(),
        onChangeComplete: () => Promise.resolve(),
    };

    static propTypes = {
        color: PropTypes.string,
        contextCls: PropTypes.string,
        changeCompleteThreshold: PropTypes.number,
        hasAlpha: PropTypes.bool,
        onChange: PropTypes.func,
        onChangeComplete: PropTypes.func,
    };

    render() {
        const { contextCls, color, hasAlpha } = this.props;
        const Picker = hasAlpha ? RgbaColorPicker : RgbColorPicker;
        const sanatizedColor = this.getSanatizedColor(color);
        // console.log('color: ', color);

        return (
            <Picker
                className={cx(this.baseCls, contextCls)}
                color={sanatizedColor}
                onChange={this.handleChange}
            />
        );
    }

    handleChange = (color) => {
        const { onChange, hasAlpha } = this.props;
        // Return rgba if hasAlpha is true, hex if hasAlpha is false
        const returnedColor = hasAlpha
            ? convertColorToRGB(color, true)
            : convertColorToHex(color);

        onChange(returnedColor);
        this.handleChangeCompleteDebounce(returnedColor);
    };

    handleChangeCompleteDebounce = (color) => {
        const { changeCompleteThreshold } = this.props;

        if (this.handleChangeCompleteTimeout) {
            clearTimeout(this.handleChangeCompleteTimeout);
        }

        this.handleChangeCompleteTimeout = onChangeCompleteDebounce(() => {
            this.handleChangeComplete(color);
        }, changeCompleteThreshold);
    };

    handleChangeComplete = (color) => {
        const { onChangeComplete } = this.props;

        onChangeComplete(color);
    };

    getSanatizedColor = (color) => {
        if (!color) {
            return undefined;
        }

        return convertColorToRGB(color);
    };

    baseCls = 'bankai-color-picker';
}

export default ColorPicker;
