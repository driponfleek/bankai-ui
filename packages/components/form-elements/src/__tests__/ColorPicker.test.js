/* eslint-disable no-console */
import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import ColorPicker from '../ColorPicker';

const originalConsoleError = console.error.bind(console.error);

jest.useFakeTimers();

describe('<ColorPicker />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<ColorPicker />);
        console.error = originalConsoleError;
    });

    it('should call props.onChange and props.onChangeComplete when handleChange method is called', () => {
        const changeSpy = jest.fn(ColorPicker.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPicker.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<ColorPicker {...props} ref={setRef} />);
        });
        compRef.handleChange();
        jest.runAllTimers();

        expect(changeSpy).toHaveBeenCalled();
        expect(changeCompleteSpy).toHaveBeenCalled();
    });

    it('should only call onChangeComplete once when handleChange method is called multiple times', () => {
        const changeSpy = jest.fn(ColorPicker.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPicker.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<ColorPicker {...props} ref={setRef} />);
        });
        compRef.handleChange();
        jest.advanceTimersByTime(100);
        compRef.handleChange();
        jest.runOnlyPendingTimers();

        expect(changeSpy).toHaveBeenCalledTimes(2);
        expect(changeCompleteSpy).toHaveBeenCalledTimes(1);
    });

    it('should return rgb object when getSanatizedColor method is called with valid color', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<ColorPicker ref={setRef} />);
        });
        const expected = {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        };
        const result = compRef.getSanatizedColor('#000000');

        expect(result).toEqual(expected);
    });

    it('should use the react-colorful rgb color picker when props.hasAlpha is false', () => {
        act(() => {
            render(<ColorPicker />);
        });
        const alphaSliderDOMs = document.getElementsByClassName(
            'react-colorful__alpha',
        );

        expect(alphaSliderDOMs).toHaveLength(0);
    });

    it('should use the react-colorful rgba color picker when props.hasAlpha is true', () => {
        act(() => {
            render(<ColorPicker hasAlpha />);
        });
        const alphaSliderDOMs = document.getElementsByClassName(
            'react-colorful__alpha',
        );

        expect(alphaSliderDOMs).toHaveLength(1);
    });

    it('should return hex color value when calling handleChange method and props.hasAlpha is false', () => {
        const changeSpy = jest.fn(ColorPicker.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPicker.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<ColorPicker {...props} ref={setRef} />);
        });
        const expected = '#000000';
        compRef.handleChange({ r: 0, g: 0, b: 0, a: 1 });
        jest.runAllTimers();

        expect(changeSpy).toHaveBeenCalledWith(expected);
        expect(changeCompleteSpy).toHaveBeenCalledWith(expected);
    });

    it('should return rgba string value when calling handleChange method and props.hasAlpha is true', () => {
        const changeSpy = jest.fn(ColorPicker.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPicker.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<ColorPicker {...props} ref={setRef} hasAlpha />);
        });
        const expected = 'rgba(0, 0, 0, 0.5)';
        compRef.handleChange({ r: 0, g: 0, b: 0, a: 0.5 });
        jest.runAllTimers();

        expect(changeSpy).toHaveBeenCalledWith(expected);
        expect(changeCompleteSpy).toHaveBeenCalledWith(expected);
    });

    // it('should ', () => {});
});
