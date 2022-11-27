import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import FormControlHint from '../FormControlHint';

const baseCls = 'bankai-form-control-hint';

describe('<FormControlHint />', () => {
    it('should render without crashing', () => {
        render(<FormControlHint />);
    });

    it('should render hint when props.hintText is defined', () => {
        const { container } = render(<FormControlHint hintText="I'm a hint" />);
        const defaultTextDOMs = container.querySelector(`.${baseCls}__text`);

        expect(defaultTextDOMs).toBeDefined();
    });

    it('should render hint when props.renderHint is defined', () => {
        const testCls = 'custom-hint-text';
        const { container } = render(
            <FormControlHint
                renderHint={() => <span className={testCls}>Hint Text</span>}
            />,
        );
        const customTextDOMs = container.querySelector(testCls);

        expect(customTextDOMs).toBeDefined();
    });

    it('should set the appropriate ARIA props when getARIAExtantProps is called', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(
            <FormControlHint
                hintARIALive="polite"
                hintARIARelevant="additions removals"
                ref={setRef}
                isHintARIAAtomic
            />,
        );
        const expected = {
            'aria-atomic': true,
            'aria-live': 'polite',
            'aria-relevant': 'additions removals',
        };
        const result = compRef.getARIAExtantProps();

        expect(result).toEqual(expected);
    });

    // it('should ', () => {});
});
