import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Callout } from '@epr0t0type/bankai-ui-callouts';
import { BankaiColorPalette } from '@epr0t0type/bankai-ui-icons';
import ColorSwatchDetailed from './ColorSwatchDetailed';

// Styles
import './styles/color-variants-list.scss';

class ColorVariantsList extends PureComponent {
    static defaultProps = {
        shouldScroll: true,
        variants: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        shouldScroll: PropTypes.bool,
        variants: PropTypes.arrayOf(PropTypes.object),
        renderSwatch: PropTypes.func,
    };

    render() {
        const { contextCls, shouldScroll, variants } = this.props;
        const hasVariants = variants.length > 0;
        const modCls = {
            [`${this.baseCls}--should-scroll`]: shouldScroll,
        };

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                {!hasVariants && this.renderEmptyState()}
                {hasVariants && this.renderList()}
            </div>
        );
    }

    renderList = () => {
        const { variants, renderSwatch } = this.props;
        const swatchRenderer = renderSwatch || this.renderSwatch;

        return variants.map((variant) => swatchRenderer(variant));
    };

    renderSwatch = (variant) => {
        const { name, id } = variant || {};

        return (
            <ColorSwatchDetailed
                colorData={variant}
                colorName={name || id}
                key={id}
            />
        );
    };

    renderEmptyState = () => {
        return (
            <Callout
                contextCls={`${this.baseCls}__empty-state`}
                title="No Variants"
                renderIcon={this.renderCalloutIcon}
            />
        );
    };

    renderCalloutIcon = (iconCls) => (
        <BankaiColorPalette contextCls={iconCls} />
    );

    baseCls = 'bankai-sb-color-variants-list';
}

export default ColorVariantsList;
