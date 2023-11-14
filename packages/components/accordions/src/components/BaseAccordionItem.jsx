import PropTypes from 'prop-types';
import AccordionItem from '../AccordionItem';
import AccordionItemPanel from '../AccordionItemPanel';
import BaseAccordionItemTrigger from './BaseAccordionItemTrigger';

const BaseAccordionItem = (props) => {
    const { baseCls, content, headingLvl, renderTrigger, renderTriggerIcon } =
        props;
    const { props: contentProps } = content;
    const { accItemProps = {}, accTriggerProps = {} } = contentProps;
    const Trigger = renderTrigger ?? BaseAccordionItemTrigger;

    return (
        <AccordionItem {...accItemProps}>
            <Trigger
                {...accTriggerProps}
                baseCls={baseCls}
                headingLvl={headingLvl}
                renderTriggerIcon={renderTriggerIcon}
            />
            <AccordionItemPanel>{content}</AccordionItemPanel>
        </AccordionItem>
    );
};

BaseAccordionItem.defaultProps = {
    headingLvl: 3,
};

BaseAccordionItem.propTypes = {
    baseCls: PropTypes.string,
    headingLvl: PropTypes.number,
    content: PropTypes.node,
    renderTrigger: PropTypes.func,
    renderTriggerIcon: PropTypes.func,
};

export default BaseAccordionItem;
