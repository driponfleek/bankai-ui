import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import generateArrUtil from './utils/generateArrUtil';

// Constants
import { LOADING_DOTS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-dots.scss';

const {
    BOUNCE,
    FADE,
    FADE_COMPACT,
    PULSE,
    PULSE_COMPACT,
    PULSE_FADE,
    PULSE_FADE_COMPACT,
    WORM,
} = LOADING_DOTS_VARIANTS;

class LoadingDots extends PureComponent {
    static defaultProps = {
        variant: BOUNCE,
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
                {this.renderDots()}
            </span>
        );
    }

    renderDots = () => {
        const { variant } = this.props;
        let numberOfDots;

        switch (variant) {
            case FADE:
            case PULSE:
            case PULSE_FADE:
                numberOfDots = 9;
                break;
            default:
                numberOfDots = 3;
                break;
        }
        const arrOfNums = generateArrUtil(numberOfDots);

        return arrOfNums.map((id) => this.renderDot(id));
    };

    renderDot = (id) => {
        return <span key={id} className={`${this.baseCls}__dot`} />;
    };

    getModCls = () => {
        const { variant } = this.props;

        return {
            [`${this.baseCls}--bounce`]: variant === BOUNCE,
            [`${this.baseCls}--fade`]: variant === FADE,
            [`${this.baseCls}--fade-compact`]: variant === FADE_COMPACT,
            [`${this.baseCls}--pulse`]: variant === PULSE,
            [`${this.baseCls}--pulse-compact`]: variant === PULSE_COMPACT,
            [`${this.baseCls}--pulse-fade`]: variant === PULSE_FADE,
            [`${this.baseCls}--pulse-fade-compact`]:
                variant === PULSE_FADE_COMPACT,
            [`${this.baseCls}--worm`]: variant === WORM,
        };
    };

    baseCls = 'bankai-loading-dots';
}

export default LoadingDots;
