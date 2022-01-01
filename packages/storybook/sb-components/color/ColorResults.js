import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ColorVariantsList from './ColorVariantsList';

// Styles
import './styles/color-results.scss';

class ColorResults extends Component {
    static defaultProps = {
        shouldScrollVariants: true,
        baseColor: {},
        variants: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        shouldScrollVariants: PropTypes.bool,
        baseColor: PropTypes.shape({
            hex: PropTypes.string,
        }),
        variants: PropTypes.arrayOf(PropTypes.object),
        renderComp: PropTypes.func,
        renderSwatch: PropTypes.func,
    };

    render() {
        const {
            contextCls,
            shouldScrollVariants,
            variants,
            renderComp,
            renderSwatch,
            ...rest
        } = this.props;

        return (
            <div className={cx(this.baseCls, contextCls)}>
                {renderComp && (
                    <div className={cx(`${this.baseCls}__comp-container`)}>
                        {renderComp({
                            ...rest,
                        })}
                    </div>
                )}
                <div className={cx(`${this.baseCls}__variants-container`)}>
                    <ColorVariantsList
                        shouldScroll={shouldScrollVariants}
                        variants={variants}
                        renderSwatch={renderSwatch}
                    />
                </div>
            </div>
        );
    }

    baseCls = 'bankai-sb-color-results';
}

export default ColorResults;
