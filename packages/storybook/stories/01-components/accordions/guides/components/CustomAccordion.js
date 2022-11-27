import { BaseAccordion } from '@epr0t0type/bankai-ui-accordions';
import MockAccordionContent from './MockAccordionContent';
import Paragraph from '../../../../../sb-components/content/Paragraph';

const CustomAccordion = () => {
    const baseCls = 'my-custom-accordion';
    const text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum turpis at metus tristique, sed euismod diam rhoncus.';

    return (
        <BaseAccordion contextCls={baseCls}>
            <MockAccordionContent
                accItemProps={{ id: '001' }}
                accTriggerProps={{
                    children: 'Accordion Item 1',
                }}
            >
                <Paragraph>{text}</Paragraph>
            </MockAccordionContent>
            <MockAccordionContent
                accItemProps={{ id: '002' }}
                accTriggerProps={{
                    children: 'Accordion Item 2',
                }}
            >
                <Paragraph>{text}</Paragraph>
            </MockAccordionContent>
            <MockAccordionContent
                accItemProps={{ id: '003' }}
                accTriggerProps={{
                    children: 'Accordion Item 3',
                }}
            >
                <Paragraph>{text}</Paragraph>
            </MockAccordionContent>
        </BaseAccordion>
    );
};

export default CustomAccordion;
