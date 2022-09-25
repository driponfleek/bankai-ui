import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ColorVariantsGridList from './ColorVariantsGridList';
import ColorSwatchSimple from './ColorSwatchSimple';

// Styles
import './styles/base-color-with-variants.scss';

class BaseColorWithVariants extends PureComponent {
    static defaultProps = {
        baseColor: {},
        variants: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        baseColor: PropTypes.object,
        variants: PropTypes.arrayOf(PropTypes.object),
        renderBaseColor: PropTypes.func,
        renderSwatch: PropTypes.func,
    };

    render() {
        const {
            contextCls,
            baseColor,
            variants,
            renderBaseColor,
            renderSwatch,
        } = this.props;
        const baseColorRenderer = renderBaseColor || this.renderBaseColor;

        return (
            <div className={cx(this.baseCls, contextCls)}>
                <div className={`${this.baseCls}__base-color-container`}>
                    {baseColorRenderer(baseColor)}
                </div>
                <div className={`${this.baseCls}__variants-container`}>
                    <ColorVariantsGridList
                        variants={variants}
                        renderSwatch={renderSwatch}
                    />
                </div>
            </div>
        );
    }

    renderBaseColor = (baseColor) => {
        const { colorDescription, colorName, colorValue, ...rest } = baseColor;

        return (
            <ColorSwatchSimple
                {...rest}
                colorDescription={colorDescription}
                colorName={colorName}
                colorValue={colorValue}
            />
        );
    };

    baseCls = 'bankai-sb-base-color-with-variants';
}

export default BaseColorWithVariants;
