/* eslint-disable no-console */
import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Heading from '../Heading';

const originalConsoleError = console.error.bind(console.error);
const baseCls = 'bankai-heading';

describe('<Heading />', () => {
    it('should render without crashing', () => {
        render(<Heading />);
    });

    it('should return a fall back heading level of 2 when passed a number higher than 6 for props.headingLvl', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl={7} ref={setRef} />);
        });
        const result = compRef.getControlledHeadingLevel();

        expect(result).toBe(2);
    });

    it('should return a fall back heading level of 2 when passed a number lower than 1 for props.headingLvl', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl={0} ref={setRef} />);
        });
        const result = compRef.getControlledHeadingLevel();

        expect(result).toBe(2);
    });

    it('should return a fall back heading level of 2 when passed a string instead of a number for props.headingLvl', () => {
        console.error = jest.fn();
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl="test" ref={setRef} />);
        });
        const result = compRef.getControlledHeadingLevel();

        expect(result).toBe(2);
        console.error = originalConsoleError;
    });

    it('should set only the h1 modifier class when props.headingLvl is 1', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl={1} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--h1`]: true,
            [`${baseCls}--h2`]: false,
            [`${baseCls}--h3`]: false,
            [`${baseCls}--h4`]: false,
            [`${baseCls}--h5`]: false,
            [`${baseCls}--h6`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should set only the h2 modifier class when props.headingLvl is not defined', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--h1`]: false,
            [`${baseCls}--h2`]: true,
            [`${baseCls}--h3`]: false,
            [`${baseCls}--h4`]: false,
            [`${baseCls}--h5`]: false,
            [`${baseCls}--h6`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should set only the h3 modifier class when props.headingLvl is 3', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl={3} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--h1`]: false,
            [`${baseCls}--h2`]: false,
            [`${baseCls}--h3`]: true,
            [`${baseCls}--h4`]: false,
            [`${baseCls}--h5`]: false,
            [`${baseCls}--h6`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should set only the h4 modifier class when props.headingLvl is 4', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl={4} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--h1`]: false,
            [`${baseCls}--h2`]: false,
            [`${baseCls}--h3`]: false,
            [`${baseCls}--h4`]: true,
            [`${baseCls}--h5`]: false,
            [`${baseCls}--h6`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should set only the h5 modifier class when props.headingLvl is 5', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl={5} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--h1`]: false,
            [`${baseCls}--h2`]: false,
            [`${baseCls}--h3`]: false,
            [`${baseCls}--h4`]: false,
            [`${baseCls}--h5`]: true,
            [`${baseCls}--h6`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should set only the h6 modifier class when props.headingLvl is 6', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Heading headingLvl={6} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--h1`]: false,
            [`${baseCls}--h2`]: false,
            [`${baseCls}--h3`]: false,
            [`${baseCls}--h4`]: false,
            [`${baseCls}--h5`]: false,
            [`${baseCls}--h6`]: true,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    // it('should ', () => {});
});
