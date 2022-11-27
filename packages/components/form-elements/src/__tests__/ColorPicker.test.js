/* eslint-disable no-console */
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import ColorPicker from '../ColorPicker';

const originalConsoleError = console.error.bind(console.error);
const sleep = async (ms) =>
    new Promise((r) => {
        setTimeout(r, ms);
    });

describe('<ColorPicker />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<ColorPicker />);
        console.error = originalConsoleError;
    });

    it('should call props.onChange and props.onChangeComplete when handleChange method is called', async () => {
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
        render(<ColorPicker {...props} ref={setRef} />);
        await compRef.handleChange();
        await sleep(250);

        expect(changeSpy).toHaveBeenCalled();
        expect(changeCompleteSpy).toHaveBeenCalled();
    });

    it('should only call onChangeComplete once when handleChange method is called multiple times', async () => {
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
        render(<ColorPicker {...props} ref={setRef} />);
        compRef.handleChange();
        compRef.handleChange();
        await sleep(250);

        expect(changeSpy).toHaveBeenCalledTimes(2);
        expect(changeCompleteSpy).toHaveBeenCalledTimes(1);
    });

    it('should return rgb object when getSanatizedColor method is called with valid color', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<ColorPicker ref={setRef} />);
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
        const { container } = render(<ColorPicker />);
        const alphaSliderDOMs = container.querySelector(
            '.react-colorful__alpha',
        );

        expect(alphaSliderDOMs).toBeNull();
    });

    it('should use the react-colorful rgba color picker when props.hasAlpha is true', () => {
        const { container } = render(<ColorPicker hasAlpha />);
        const alphaSliderDOMs = container.querySelector(
            '.react-colorful__alpha',
        );

        expect(alphaSliderDOMs).toBeDefined();
    });

    it('should return hex color value when calling handleChange method and props.hasAlpha is false', async () => {
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
        render(<ColorPicker {...props} ref={setRef} />);
        const expected = '#000000';
        await compRef.handleChange({ r: 0, g: 0, b: 0, a: 1 });
        await sleep(250);

        expect(changeSpy).toHaveBeenCalledWith(expected);
        expect(changeCompleteSpy).toHaveBeenCalledWith(expected);
    });

    it('should return rgba string value when calling handleChange method and props.hasAlpha is true', async () => {
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
        render(<ColorPicker {...props} ref={setRef} hasAlpha />);
        const expected = 'rgba(0, 0, 0, 0.5)';
        await compRef.handleChange({ r: 0, g: 0, b: 0, a: 0.5 });
        await sleep(250);

        expect(changeSpy).toHaveBeenCalledWith(expected);
        expect(changeCompleteSpy).toHaveBeenCalledWith(expected);
    });

    // it('should ', () => {});
});
