import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/heading.scss';

class Heading extends PureComponent {
    static defaultProps = {
        headingLvl: 2,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        headingLvl: PropTypes.number,
    };

    render() {
        const { headingLvl } = this.props;
        const isNumber = this.getIsHeadingLvlNum();
        const isInRange = this.getIsHeadingLvlInRange();
        const headingLevel = isNumber && isInRange ? headingLvl : 2;

        return this[`renderH${headingLevel}`](
            this.getContainerCls(),
            this.getProps(),
        );
    }

    renderH1(containerCls, props) {
        const { children } = this.props;

        return (
            <h1 {...props} className={containerCls}>
                {children}
            </h1>
        );
    }

    renderH2(containerCls, props) {
        const { children } = this.props;

        return (
            <h2 {...props} className={containerCls}>
                {children}
            </h2>
        );
    }

    renderH3(containerCls, props) {
        const { children } = this.props;

        return (
            <h3 {...props} className={containerCls}>
                {children}
            </h3>
        );
    }

    renderH4(containerCls, props) {
        const { children } = this.props;

        return (
            <h4 {...props} className={containerCls}>
                {children}
            </h4>
        );
    }

    renderH5(containerCls, props) {
        const { children } = this.props;

        return (
            <h5 {...props} className={containerCls}>
                {children}
            </h5>
        );
    }

    renderH6(containerCls, props) {
        const { children } = this.props;

        return (
            <h6 {...props} className={containerCls}>
                {children}
            </h6>
        );
    }

    getContainerCls() {
        const { contextCls } = this.props;

        return cx(this.baseCls, this.getModCls(), contextCls);
    }

    getModCls() {
        const { headingLvl } = this.props;
        const isNumber = this.getIsHeadingLvlNum();
        const isInRange = this.getIsHeadingLvlInRange();

        return {
            [`${this.baseCls}--h1`]: headingLvl === 1,
            [`${this.baseCls}--h2`]:
                !isNumber || !isInRange || headingLvl === 2,
            [`${this.baseCls}--h3`]: headingLvl === 3,
            [`${this.baseCls}--h4`]: headingLvl === 4,
            [`${this.baseCls}--h5`]: headingLvl === 5,
            [`${this.baseCls}--h6`]: headingLvl === 6,
        };
    }

    getProps = () => {
        const { contextCls, headingLvl, children, ...rest } = this.props;
        const props = { ...rest };

        return props;
    };

    getIsHeadingLvlNum() {
        const { headingLvl } = this.props;

        return Number.isInteger(headingLvl);
    }

    getIsHeadingLvlInRange() {
        const { headingLvl } = this.props;

        return headingLvl > 0 && headingLvl < 7;
    }

    baseCls = 'bankai-heading';
}

export default Heading;
