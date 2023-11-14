import { AccordionContentComposer } from '@driponfleek/bankai-ui-accordions';
import { Paragraph } from '@driponfleek/bankai-ui-typography';

const MockAccordionContent = (props) => {
    const { children } = props;

    return <Paragraph>{children}</Paragraph>;
};

export default AccordionContentComposer(MockAccordionContent, {
    shouldPadContent: true,
});
