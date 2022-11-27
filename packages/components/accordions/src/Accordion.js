import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionItemTrigger from './AccordionItemTrigger';
import BaseAccordion from './BaseAccordion';

// styles
import './styles/accordion.scss';

class Accordion extends PureComponent {
    static defaultProps = {
        headingLvl: 3,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        headingLvl: PropTypes.number,
        renderTrigger: PropTypes.func,
        renderTriggerIcon: PropTypes.func,
    };

    render() {
        const { contextCls, renderTrigger, ...rest } = this.props;

        return (
            <BaseAccordion
                {...rest}
                contextCls={cx(this.baseCls, contextCls)}
                renderTrigger={renderTrigger ?? this.renderTrigger}
            />
        );
    }

    renderTrigger = (accTriggerProps) => {
        const { headingLvl, renderTriggerIcon } = this.props;
        const { children, headingProps, ...rest } = accTriggerProps || {};
        const { headingLvl: hpHeadingLvl } = headingProps || {};
        const hProps = {
            ...headingProps,
            headingLvl: hpHeadingLvl || headingLvl,
        };

        return (
            <AccordionItemTrigger
                renderTriggerIcon={renderTriggerIcon}
                headingProps={hProps}
                {...rest}
            >
                {children}
            </AccordionItemTrigger>
        );
    };

    baseCls = 'bankai-accordion';
}

export default Accordion;
