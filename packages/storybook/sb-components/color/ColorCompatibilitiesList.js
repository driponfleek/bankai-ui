import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    BankaiColorPalette,
    BankaiTextColor,
} from '@epr0t0type/bankai-ui-icons';

// Styles
import './styles/color-compatibilities-list.scss';

class ColorCompatibilitiesList extends PureComponent {
    static defaultProps = {
        compatibleTextColors: [],
        compatibleNonTextColors: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        defaultTextColor: PropTypes.string,
        compatibleTextColors: PropTypes.arrayOf(PropTypes.string),
        compatibleNonTextColors: PropTypes.arrayOf(PropTypes.string),
    };

    render() {
        const { contextCls } = this.props;

        return (
            <div className={cx(this.baseCls, contextCls)}>
                {this.renderCompatibleTextColors()}
                {this.renderCompatibleNonTextColors()}
            </div>
        );
    }

    renderCompatibleColors = (Icon, label, value, clsSuffix) => {
        return (
            <div
                className={`${this.baseCls}__compat-color ${this.baseCls}__${clsSuffix}`}
            >
                <dl className={`${this.baseCls}__icon-and-val`}>
                    <dt className={`${this.baseCls}__icon`}>
                        <span className={`${this.baseCls}__icon-wrapper`}>
                            <Icon title={label} />
                        </span>
                    </dt>
                    <dd className={`${this.baseCls}__value`}>{value}</dd>
                </dl>
            </div>
        );
    };

    renderCompatibleTextColors = () => {
        const { defaultTextColor } = this.props;
        const compatColorsString = this.getCompatibleColors(true);
        const compatibleColors = (
            <Fragment>
                {defaultTextColor}
                {compatColorsString && `, ${compatColorsString}`}
            </Fragment>
        );

        return this.renderCompatibleColors(
            BankaiTextColor,
            'Compatible Text Colors',
            compatibleColors,
            'text-colors',
        );
    };

    renderCompatibleNonTextColors = () => {
        return this.renderCompatibleColors(
            BankaiColorPalette,
            'Compatible Non-Text Colors',
            this.getCompatibleColors() || 'N/A',
            'text-colors',
        );
    };

    getCompatibleColors = (isText) => {
        const { compatibleTextColors, compatibleNonTextColors } = this.props;

        return isText
            ? this.getCompatibleColorsString(compatibleTextColors)
            : this.getCompatibleColorsString(compatibleNonTextColors);
    };

    getCompatibleColorsString = (compatibleColors = []) => {
        return compatibleColors.length > 0
            ? compatibleColors.join(', ')
            : undefined;
    };

    baseCls = 'bankai-sb-color-compatibilities-list';
}

export default ColorCompatibilitiesList;
