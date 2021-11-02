import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { LOADING_SQUARES_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-squares.scss';

const {
    FADE,
    FOLDING_QUADS,
    PULSE,
    PULSING_WAVE,
    PULSE_FADE,
} = LOADING_SQUARES_VARIANTS;

class LoadingSquares extends PureComponent {
    static defaultProps = {
        variant: PULSING_WAVE,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
    };

    render() {
        const { contextCls } = this.props;
        const modCls = this.getModCls();

        return (
            <span className={cx(this.baseCls, modCls, contextCls)}>
                {this.renderSquares()}
            </span>
        );
    }

    renderSquares = () => {
        const { variant } = this.props;
        const numberOfSquares = variant === FOLDING_QUADS ? 4 : 9;
        const arrOfNums = [...Array(numberOfSquares).keys()];

        return arrOfNums.map((id) => this.renderSquare(id));
    };

    renderSquare = (id) => {
        return <span key={id} className={`${this.baseCls}__square`} />;
    };

    getModCls = () => {
        const { variant } = this.props;

        return {
            [`${this.baseCls}--fade`]: variant === FADE,
            [`${this.baseCls}--folding-quads`]: variant === FOLDING_QUADS,
            [`${this.baseCls}--pulse`]: variant === PULSE,
            [`${this.baseCls}--pulsing-wave`]: variant === PULSING_WAVE,
            [`${this.baseCls}--pulse-fade`]: variant === PULSE_FADE,
        };
    };

    baseCls = 'bankai-loading-squares';
}

export default LoadingSquares;
