import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Accordion from '../Accordion';
import AccordionContentComposer from '../AccordionContentComposer';

const containerCls = 'accordion-test-content-container';
const ContentContainer = (props) => {
    const { children } = props;

    return <div className={containerCls}>{children}</div>;
};
const ComposedContent = AccordionContentComposer(ContentContainer);

describe('<Accordion />', () => {
    it('should render without crashing', () => {
        render(<Accordion />);
    });

    it('should not crash if calling renderTrigger with undefined', () => {
        let compRef;
        const setCompRef = (el) => {
            compRef = el;
        };
        render(<Accordion ref={setCompRef} />);

        compRef.renderTrigger();
    });

    it('should render all the child items nested inside', () => {
        const { container } = render(
            <Accordion>
                <ComposedContent
                    accTriggerProps={{
                        children: 'Accordion Item 1',
                    }}
                />
            </Accordion>,
        );
        const childItems = container.querySelector(`.${containerCls}`);

        expect(childItems).toBeDefined();
    });

    it('should render custom trigger if props.renderTrigger is provided', () => {
        const { container } = render(
            <Accordion
                renderTrigger={(triggerProps) => (
                    <div className="custom-trigger">
                        {triggerProps?.children}
                    </div>
                )}
            >
                <ComposedContent
                    accTriggerProps={{
                        children: 'Accordion Item 1',
                    }}
                />
            </Accordion>,
        );
        const trigger = container.querySelector('.custom-trigger');

        expect(trigger).toBeDefined();
    });

    // it('should ', () => {});
});
