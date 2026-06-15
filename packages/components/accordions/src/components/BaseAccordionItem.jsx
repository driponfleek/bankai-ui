import AccordionItem from '../AccordionItem';
import AccordionItemPanel from '../AccordionItemPanel';
import BaseAccordionItemTrigger from './BaseAccordionItemTrigger';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 * @param {number} [props.headingLvl] - Heading level for the accordion item heading
 * @param {React.ReactNode} [props.content] - React node rendered as the accordion item content
 * @param {Function} [props.renderTrigger] - Custom render function for the accordion trigger
 * @param {Function} [props.renderTriggerIcon] - Custom render function for the accordion trigger icon
 */
const BaseAccordionItem = (props) => {
    const {
        baseCls,
        content,
        headingLvl = 3,
        renderTrigger,
        renderTriggerIcon,
    } = props;
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

export default BaseAccordionItem;
