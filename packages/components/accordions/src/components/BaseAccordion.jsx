import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionWrapper from '../AccordionWrapper';
import BaseAccordionItem from './BaseAccordionItem';

// Constants
import { ACCORDION_BASE_BASE_CLS } from '../const/baseClsConst';

// styles
import './styles/base-accordion.scss';

const BaseAccordion = (props) => {
    const {
        contextCls,
        headingLvl,
        shouldAllowMultipleExpanded,
        shouldAllowZeroExpanded,
        preExpanded,
        renderTrigger,
        renderTriggerIcon,
        onChange,
        children,
    } = props;
    const childItems = Children.toArray(children).map((content) => (
        <BaseAccordionItem
            baseCls={ACCORDION_BASE_BASE_CLS}
            key={content.key}
            content={content}
            headingLvl={headingLvl}
            renderTrigger={renderTrigger}
            renderTriggerIcon={renderTriggerIcon}
        />
    ));
    const handleChange = (expandedIds) => {
        onChange(expandedIds);
    };

    return (
        <AccordionWrapper
            contextCls={cx(ACCORDION_BASE_BASE_CLS, contextCls)}
            shouldAllowMultipleExpanded={shouldAllowMultipleExpanded}
            shouldAllowZeroExpanded={shouldAllowZeroExpanded}
            preExpanded={preExpanded}
            onChange={handleChange}
        >
            {childItems}
        </AccordionWrapper>
    );
};

BaseAccordion.defaultProps = {
    headingLvl: 3,
    shouldAllowMultipleExpanded: false,
    shouldAllowZeroExpanded: true,
    onChange: () => Promise.resolve(),
};

BaseAccordion.propTypes = {
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
    shouldAllowMultipleExpanded: PropTypes.bool,
    shouldAllowZeroExpanded: PropTypes.bool,
    preExpanded: PropTypes.array,
    renderTrigger: PropTypes.func,
    renderTriggerIcon: PropTypes.func,
    onChange: PropTypes.func,
};

export default BaseAccordion;
