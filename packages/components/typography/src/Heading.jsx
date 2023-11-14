import { PureComponent } from 'react';
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
        const { children } = this.props;
        const controlledHeadingLevel = this.getControlledHeadingLevel();

        const Tag = `h${controlledHeadingLevel}`;

        return (
            <Tag {...this.getProps()} className={this.getContainerCls()}>
                {children}
            </Tag>
        );
    }

    getControlledHeadingLevel = () => {
        const { headingLvl } = this.props;
        const isNumber = this.getIsHeadingLvlNum();
        const isInRange = this.getIsHeadingLvlInRange();

        return isNumber && isInRange ? headingLvl : 2;
    };

    getContainerCls() {
        const { contextCls } = this.props;

        return cx(this.baseCls, this.getModCls(), contextCls);
    }

    getModCls() {
        const controlledHeadingLevel = this.getControlledHeadingLevel();

        return {
            [`${this.baseCls}--h1`]: controlledHeadingLevel === 1,
            [`${this.baseCls}--h2`]: controlledHeadingLevel === 2,
            [`${this.baseCls}--h3`]: controlledHeadingLevel === 3,
            [`${this.baseCls}--h4`]: controlledHeadingLevel === 4,
            [`${this.baseCls}--h5`]: controlledHeadingLevel === 5,
            [`${this.baseCls}--h6`]: controlledHeadingLevel === 6,
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
