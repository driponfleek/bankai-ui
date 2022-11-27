import { AccordionContentComposer } from '@epr0t0type/bankai-ui-accordions';

// Styles
import './styles/mock-accordion-content.scss';

const MockAccordionContent = (props) => {
    const { children } = props;

    return children;
};

export default AccordionContentComposer(MockAccordionContent, {
    shouldPadContent: true,
});
