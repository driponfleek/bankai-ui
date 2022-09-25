import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getTextColor } from '@epr0t0type/bankai-lib-theme-utils';
import ColorVariantsList from './ColorVariantsList';

// Styles
import './styles/color-variants-grid-list.scss';

class ColorVariantsGridList extends PureComponent {
    static defaultProps = {
        variants: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variants: PropTypes.arrayOf(PropTypes.object),
        renderSwatch: PropTypes.func,
    };

    render() {
        const { contextCls, variants, renderSwatch } = this.props;
        const swatchRenderer = renderSwatch || this.renderSwatch;

        return (
            <ColorVariantsList
                contextCls={cx(this.baseCls, contextCls)}
                shouldScroll={false}
                variants={variants}
                renderSwatch={swatchRenderer}
            />
        );
    }

    renderSwatch = (props = {}) => {
        const { colorDescription, colorName, colorValue, id, ...rest } = props;
        const style = {
            color: getTextColor(colorValue),
            backgroundColor: colorValue,
        };

        return (
            <div
                {...rest}
                key={id}
                className={`${this.baseCls}__color-variant`}
                style={style}
            >
                <div className={`${this.baseCls}__color-variant-inner`}>
                    <span className={`${this.baseCls}__color-variant-desc`}>
                        <strong>{colorDescription}</strong>
                    </span>
                    <span className={`${this.baseCls}__color-variant-name`}>
                        {colorName}
                    </span>
                </div>
            </div>
        );
    };

    baseCls = 'bankai-sb-color-variants-grid-list';
}

export default ColorVariantsGridList;
