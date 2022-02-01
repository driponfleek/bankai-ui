import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import FormControlHint from '../FormControlHint';

const baseCls = 'bankai-form-control-hint';

describe('<FormControlHint />', () => {
    it('should render without crashing', () => {
        render(<FormControlHint />);
    });

    it('should render hint when props.hintText is defined', () => {
        act(() => {
            render(<FormControlHint hintText="I'm a hint" />);
        });
        const defaultTextDOMs = document.getElementsByClassName(
            `${baseCls}__text`,
        );

        expect(defaultTextDOMs).toHaveLength(1);
    });

    it('should render hint when props.renderHint is defined', () => {
        const testCls = 'custom-hint-text';
        act(() => {
            render(
                <FormControlHint
                    renderHint={() => (
                        <span className={testCls}>Hint Text</span>
                    )}
                />,
            );
        });
        const customTextDOMs = document.getElementsByClassName(testCls);

        expect(customTextDOMs).toHaveLength(1);
    });

    it('should set the appropriate ARIA props when getARIAExtantProps is called', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <FormControlHint
                    hintARIALive="polite"
                    hintARIARelevant="additions removals"
                    ref={setRef}
                    isHintARIAAtomic
                />,
            );
        });
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
