import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import ColorPickerInput from '../ColorPickerInput';

const baseCls = 'bankai-color-picker-input';
const colorPickerCls = 'bankai-color-picker';
jest.mock('../ColorPicker', () => (props) => {
    // eslint-disable-next-line react/prop-types
    const { onChangeComplete } = props;
    const handleChange = (e) => {
        onChangeComplete(e?.target?.value);
    };

    return <input className={colorPickerCls} onChange={handleChange} />;
});
const sleep = async (ms) =>
    new Promise((r) => {
        setTimeout(r, ms);
    });

describe('<ColorPickerInput />', () => {
    it('should render without crashing', () => {
        render(<ColorPickerInput />);
    });

    it('should call props.onChange and props.onChangeComplete with auto-corrected value when handleChange method is called with missing hash', async () => {
        const changeSpy = jest.fn(ColorPickerInput.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPickerInput.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        const { getByRole, user } = render(<ColorPickerInput {...props} />);
        const inputDOM = getByRole('textbox');
        await user.type(inputDOM, 'f');
        await sleep(250);

        expect(changeSpy).toHaveBeenCalledWith('#f');
        expect(changeCompleteSpy).toHaveBeenCalledWith('#f');
    });

    it('should call props.onChange and props.onChangeComplete when ColorPicker onChangeComplete is called', async () => {
        const changeSpy = jest.fn(ColorPickerInput.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPickerInput.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        const { container, user } = render(<ColorPickerInput {...props} />);
        const triggerDOM = container.querySelector(`.${baseCls}__trigger`);
        await user.click(triggerDOM);
        const mockInputDOM = container.querySelector(`.${colorPickerCls}`);
        await user.type(mockInputDOM, 'f');
        await sleep(250);

        expect(changeSpy).toHaveBeenCalled();
        expect(changeCompleteSpy).toHaveBeenCalled();
    });

    it('should only call onChangeComplete once when handleChange method is called multiple times', async () => {
        const changeSpy = jest.fn(ColorPickerInput.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPickerInput.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        const { container, user } = render(<ColorPickerInput {...props} />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        await user.type(inputDOM, 'f');
        // jest.advanceTimersByTime(100);
        await user.type(inputDOM, '0');
        await sleep(250);
        // jest.runOnlyPendingTimers();

        expect(changeSpy).toHaveBeenCalledTimes(2);
        expect(changeCompleteSpy).toHaveBeenCalledTimes(1);
    });

    it('should show the color picker when the trigger is clicked and the picker is not currently visible', async () => {
        const { container, user } = render(<ColorPickerInput />);
        const triggerDOM = container.querySelector(`.${baseCls}__trigger`);
        let pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();

        await user.click(triggerDOM);
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeDefined();
    });

    it('should hide the color picker when the trigger is clicked and the picker is currently visible', async () => {
        const { container, user } = render(<ColorPickerInput />);
        const triggerDOM = container.querySelector(`.${baseCls}__trigger`);
        let pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();

        await user.click(triggerDOM);
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeDefined();

        await user.click(triggerDOM);
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();
    });

    it('should hide the color picker when the user presses the escape key and the picker is currently visible', async () => {
        const { container, user } = render(<ColorPickerInput />);
        const triggerDOM = container.querySelector(`.${baseCls}__trigger`);
        let pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();

        await user.click(triggerDOM);
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeDefined();

        await user.keyboard('[Escape]');
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();
    });

    it('should hide the color picker when the user clicks outside of the picker and the picker is currently visible', async () => {
        const { container, user } = render(<ColorPickerInput />);
        const triggerDOM = container.querySelector(`.${baseCls}__trigger`);
        let pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();

        await user.click(triggerDOM);
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeDefined();

        await user.click(document.body);
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();
    });

    it('should not allow user to show the color picker when props.isDisabled is true', async () => {
        const { container, user } = render(<ColorPickerInput isDisabled />);
        const triggerDOM = container.querySelector(`.${baseCls}__trigger`);
        let pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();

        await user.click(triggerDOM);
        pickerContainerDOM = container.querySelector(`.${colorPickerCls}`);

        expect(pickerContainerDOM).toBeNull();
    });

    it('should only allow the user to type in 7 characters when props.hasAlpha is false', async () => {
        const { container, user } = render(<ColorPickerInput />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        await user.type(inputDOM, '#ffffffff');
        const result = inputDOM.value;

        expect(result).toBe('#ffffff');
    });

    it('should only allow the user to type in 9 characters when props.hasAlpha is true', async () => {
        const { container, user } = render(<ColorPickerInput hasAlpha />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        await user.type(inputDOM, '#ffffffff00');
        const result = inputDOM.value;

        expect(result).toBe('#ffffffff');
    });

    it('should render the trigger as a span instead of button to prevent user interaction when props.isReadOnly is true', () => {
        const { container } = render(<ColorPickerInput isReadOnly />);
        const triggerDOM = container.querySelector(`.${baseCls}__trigger`);
        const result = triggerDOM.tagName;

        expect(result).toBe('SPAN');
    });

    it('should render a transparent trigger swatch color when props.color is not a valid color', () => {
        const { container } = render(<ColorPickerInput color="#f" />);
        const triggerSwatchDOM = container.querySelector(
            `.${baseCls}__trigger-swatch`,
        );
        const expected = 'background-color: transparent;';
        const result = triggerSwatchDOM.getAttribute('style');

        expect(result).toBe(expected);
    });

    it('should render a trigger swatch color set to props.color when it is a valid color', () => {
        const { container } = render(<ColorPickerInput color="#f00" />);
        const triggerSwatchDOM = container.querySelector(
            `.${baseCls}__trigger-swatch`,
        );
        const expected = 'background-color: rgb(255, 0, 0);';
        const result = triggerSwatchDOM.getAttribute('style');

        expect(result).toBe(expected);
    });

    it('should set aria-invalid attribute on the input when props.hasError is true', () => {
        const { container } = render(<ColorPickerInput hasError />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        const expected = 'true';
        const result = inputDOM.getAttribute('aria-invalid');

        expect(result).toBe(expected);
    });

    it('should not crash when calling handleMouseClick with no params', async () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<ColorPickerInput ref={setRef} />);
        await compRef.handleMouseClick();
    });

    it('should call onChange with rgba converted to 8-digit hex value when props.hasAlpha is true and user sets color and alpha values via the color picker', async () => {
        const changeSpy = jest.fn(ColorPickerInput.defaultProps.onChange);
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<ColorPickerInput ref={setRef} onChange={changeSpy} hasAlpha />);
        await compRef.handlePickerChange('rgba(113, 13, 13, 0.51)');

        expect(changeSpy).toHaveBeenCalledWith('#710d0d82');
    });

    // it('should ', () => {});
});
