/* eslint-disable no-console */
import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
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
        act(() => {
            render(<InlineFormError isErrorPolite ref={setRef} />);
        });
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
        act(() => {
            render(<InlineFormError ref={setRef} />);
        });
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
        act(() => {
            render(<InlineFormError errorARIARelevant="all" ref={setRef} />);
        });
        const result = compRef.getARIAExtantProps();

        expect(result).toEqual(expected);
    });

    it('should render custom error UI when props.renderError is defined', () => {
        act(() => {
            render(
                <InlineFormError
                    renderError={() => <span className="test-error" />}
                />,
            );
        });
        const customErrorDOMs = document.getElementsByClassName('test-error');

        expect(customErrorDOMs).toHaveLength(1);
    });

    it('should only render icon container DOM when props.renderErrorIcon is defined', () => {
        act(() => {
            render(
                <InlineFormError
                    errorText="This field is required."
                    renderErrorIcon={() => <span className="test-icon" />}
                />,
            );
        });
        const iconContainerDOMs = document.getElementsByClassName(
            'bankai-inline-form-error__icon-container',
        );
        const iconDOMs = document.getElementsByClassName('test-icon');

        expect(iconContainerDOMs).toHaveLength(1);
        expect(iconDOMs).toHaveLength(1);
    });

    it('should return true when calling getHasError and props.errorText is defined', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <InlineFormError
                    errorText="This field is required."
                    ref={setRef}
                />,
            );
        });
        const result = compRef.getHasError();

        expect(result).toBe(true);
    });

    it('should return true when calling getHasError and props.renderError is defined', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <InlineFormError
                    renderError={() => <span className="test-error" />}
                    ref={setRef}
                />,
            );
        });
        const result = compRef.getHasError();

        expect(result).toBe(true);
    });

    // it('should ', () => {});
});
