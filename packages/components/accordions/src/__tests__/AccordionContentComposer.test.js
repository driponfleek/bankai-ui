import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import AccordionContentComposer from '../AccordionContentComposer';

const Comp = () => <div />;
const contextCls = 'test-context-class';
const ComposedComp = AccordionContentComposer(Comp);
const ComposedWithPadding = AccordionContentComposer(Comp, {
    contextCls,
    shouldPadContent: true,
});

describe('<AccordionContentComposer />', () => {
    it('should render without crashing', () => {
        render(<ComposedComp />);
    });

    it('should have the "--pad-content" modifier when composed with "shouldPadContent" set to "true"', () => {
        const { container } = render(<ComposedWithPadding />);

        const elWithModCls = container.querySelector(
            '.bankai-accordion-content-container--pad-content',
        );

        expect(elWithModCls).toBeDefined();
    });

    // it('should ', () => {});
});
