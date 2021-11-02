import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { LOADING_SPINNERS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-spinners.scss';

const {
    ARCS,
    CIRCULAR,
    CIRCULAR_DOTTED,
    CIRCULAR_DUAL,
    CUBE,
    CYBER,
    PIXIES,
    ORBIT,
    TRI_CUBE,
} = LOADING_SPINNERS_VARIANTS;

class LoadingSpinners extends PureComponent {
    static defaultProps = {
        variant: CUBE,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
    };

    render() {
        const { contextCls } = this.props;
        const modCls = this.getModCls();
        const shouldRenderInner = this.getShouldRenderInner();

        return (
            <span className={cx(this.baseCls, modCls, contextCls)}>
                {shouldRenderInner && (
                    <span className={`${this.baseCls}__inner`} />
                )}
            </span>
        );
    }

    getShouldRenderInner = () => {
        const { variant } = this.props;

        return variant === ORBIT || variant === TRI_CUBE;
    };

    getModCls = () => {
        const { variant } = this.props;

        return {
            [`${this.baseCls}--arcs`]: variant === ARCS,
            [`${this.baseCls}--circular`]: variant === CIRCULAR,
            [`${this.baseCls}--circular-dotted`]: variant === CIRCULAR_DOTTED,
            [`${this.baseCls}--circular-dual`]: variant === CIRCULAR_DUAL,
            [`${this.baseCls}--cube`]: variant === CUBE,
            [`${this.baseCls}--cyber`]: variant === CYBER,
            [`${this.baseCls}--pixies`]: variant === PIXIES,
            [`${this.baseCls}--orbit`]: variant === ORBIT,
            [`${this.baseCls}--tri-cube`]: variant === TRI_CUBE,
        };
    };

    baseCls = 'bankai-loading-spinners';
}

export default LoadingSpinners;
