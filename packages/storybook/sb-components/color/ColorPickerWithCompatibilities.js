import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ColorPickerInput } from '@epr0t0type/bankai-ui-form-elements';
import { getIsReadable } from '@epr0t0type/bankai-lib-color-utils';
import ColorCompatibilitiesList from './ColorCompatibilitiesList';

// Styles
import './styles/color-picker-with-compatibilities.scss';

class ColorPickerWithCompatibilities extends Component {
    static defaultProps = {
        shouldOpenUp: false,
        baseColor: {},
        onChange: () => Promise.resolve(),
        onChangeComplete: () => Promise.resolve(),
    };

    static propTypes = {
        'aria-label': PropTypes.string.isRequired,
        shouldOpenUp: PropTypes.bool,
        baseColor: PropTypes.shape({
            hex: PropTypes.string,
            hslString: PropTypes.string,
            isDark: PropTypes.bool,
            compatibleTextColors: PropTypes.arrayOf(PropTypes.string),
            compatibleNonTextColors: PropTypes.arrayOf(PropTypes.string),
        }),
        onChange: PropTypes.func,
        onChangeComplete: PropTypes.func,
    };

    render() {
        return (
            <div className={this.baseCls}>
                {this.renderInput()}
                {this.renderColorCompatibilities()}
            </div>
        );
    }

    renderInput = () => {
        const {
            'aria-label': ariaLabel,
            baseColor,
            shouldOpenUp,
            onChange,
            onChangeComplete,
        } = this.props;
        const { hex } = baseColor;

        return (
            <div className={this.sectionCls}>
                <ColorPickerInput
                    aria-label={ariaLabel}
                    color={hex}
                    shouldOpenUp={shouldOpenUp}
                    onChange={onChange}
                    onChangeComplete={onChangeComplete}
                />
            </div>
        );
    };

    renderColorCompatibilities = () => {
        const { baseColor } = this.props;
        const { compatibleTextColors, compatibleNonTextColors, hex } =
            baseColor;
        const defaultTextColor = getIsReadable('#ffffff', hex)
            ? 'White'
            : 'Black';

        return (
            <div className={this.sectionCls}>
                <ColorCompatibilitiesList
                    defaultTextColor={defaultTextColor}
                    compatibleTextColors={compatibleTextColors}
                    compatibleNonTextColors={compatibleNonTextColors}
                />
            </div>
        );
    };

    baseCls = 'bankai-sb-color-picker-with-compatibilities';

    sectionCls = `${this.baseCls}__section`;
}

export default ColorPickerWithCompatibilities;
