import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { LOADING_SPHERES_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-spheres.scss';

const {
    ALTERNATING_PULSE,
    RIPPLES,
    RIPPLES_OUTLINE,
} = LOADING_SPHERES_VARIANTS;

class LoadingSpheres extends PureComponent {
    static defaultProps = {
        variant: RIPPLES,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
    };

    render() {
        const { contextCls } = this.props;
        const modCls = this.getModCls();

        return <span className={cx(this.baseCls, modCls, contextCls)} />;
    }

    getModCls = () => {
        const { variant } = this.props;

        return {
            [`${this.baseCls}--alternating-pulse`]:
                variant === ALTERNATING_PULSE,
            [`${this.baseCls}--ripples`]: variant === RIPPLES,
            [`${this.baseCls}--ripples-outline`]: variant === RIPPLES_OUTLINE,
        };
    };

    baseCls = 'bankai-loading-spheres';
}

export default LoadingSpheres;
