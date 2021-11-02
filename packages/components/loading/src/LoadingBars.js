import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { LOADING_BARS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-bars.scss';

const {
    BOUNCE,
    FADE,
    // DRAW_THE_LINE,
    PULSE,
    PULSE_FADE,
    FREQUENCY,
} = LOADING_BARS_VARIANTS;

class LoadingBars extends PureComponent {
    static defaultProps = {
        variant: FREQUENCY,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
    };

    render() {
        const { contextCls } = this.props;
        const modCls = this.getModCls();
        // const shouldRenderBars = variant !== DRAW_THE_LINE;

        return (
            <span className={cx(this.baseCls, modCls, contextCls)}>
                {this.renderBars()}
            </span>
        );
    }

    renderBars = () => {
        const { variant } = this.props;
        let numberOfBars;

        switch (variant) {
            case FREQUENCY:
                numberOfBars = 8;
                break;
            default:
                numberOfBars = 4;
                break;
        }

        const arrOfNums = [...Array(numberOfBars).keys()];

        return arrOfNums.map((id) => this.renderBAR(id));
    };

    renderBAR = (id) => {
        return <span key={id} className={`${this.baseCls}__bar`} />;
    };

    getModCls = () => {
        const { variant } = this.props;

        return {
            [`${this.baseCls}--bounce`]: variant === BOUNCE,
            [`${this.baseCls}--fade`]: variant === FADE,
            // [`${this.baseCls}--draw-the-line`]: variant === DRAW_THE_LINE,
            [`${this.baseCls}--pulse`]: variant === PULSE,
            [`${this.baseCls}--pulse-fade`]: variant === PULSE_FADE,
            [`${this.baseCls}--frequency`]: variant === FREQUENCY,
        };
    };

    baseCls = 'bankai-loading-bars';
}

export default LoadingBars;
