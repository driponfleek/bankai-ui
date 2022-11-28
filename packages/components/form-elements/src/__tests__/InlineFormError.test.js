/* eslint-disable no-console */
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import InlineFormError from '../InlineFormError';

const originalConsoleError = console.error.bind(console.error);

describe('<InlineFormError />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<InlineFormError />);
        console.error = originalConsoleError;
    });

    it('should set the "aria-live" attribute to "polite" when props.isErrorPolite is true', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        const expected = {
            'aria-atomic': true,
            'aria-live': 'polite',
        };
        render(<InlineFormError isErrorPolite ref={setRef} />);
        const result = compRef.getARIAExtantProps();

        expect(result).toEqual(expected);
    });

    it('should set the "aria-live" attribute to "assertive" when props.isErrorPolite is false', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        const expected = {
            'aria-atomic': true,
            'aria-live': 'assertive',
            'aria-relevant': 'additions removals',
        };
        render(<InlineFormError ref={setRef} />);
        const result = compRef.getARIAExtantProps();

        expect(result).toEqual(expected);
    });

    it('should set the "aria-relevant" attribute to the value defined on props.errorARIARelevant', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        const expected = {
            'aria-atomic': true,
            'aria-live': 'assertive',
            'aria-relevant': 'all',
        };
        render(<InlineFormError errorARIARelevant="all" ref={setRef} />);
        const result = compRef.getARIAExtantProps();

        expect(result).toEqual(expected);
    });

    it('should render custom error UI when props.renderError is defined', () => {
        const { container } = render(
            <InlineFormError
                renderError={() => <span className="test-error" />}
            />,
        );
        const customErrorDOMs = container.querySelector('test-error');

        expect(customErrorDOMs).toBeDefined();
    });

    it('should only render icon container DOM when props.renderErrorIcon is defined', () => {
        const { container } = render(
            <InlineFormError
                errorText="This field is required."
                renderErrorIcon={() => <span className="test-icon" />}
            />,
        );
        const iconContainerDOMs = container.querySelector(
            'bankai-inline-form-error__icon-container',
        );
        const iconDOMs = container.querySelector('test-icon');

        expect(iconContainerDOMs).toBeDefined();
        expect(iconDOMs).toBeDefined();
    });

    it('should return true when calling getHasError and props.errorText is defined', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(
            <InlineFormError
                errorText="This field is required."
                ref={setRef}
            />,
        );
        const result = compRef.getHasError();

        expect(result).toBe(true);
    });

    it('should return true when calling getHasError and props.renderError is defined', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(
            <InlineFormError
                renderError={() => <span className="test-error" />}
                ref={setRef}
            />,
        );
        const result = compRef.getHasError();

        expect(result).toBe(true);
    });

    // it('should ', () => {});
});
