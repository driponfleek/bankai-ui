import React from 'react';
import {
    render,
    act,
    userEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
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
jest.useFakeTimers();

describe('<ColorPickerInput />', () => {
    it('should render without crashing', () => {
        render(<ColorPickerInput />);
    });

    it('should call props.onChange and props.onChangeComplete with auto-corrected value when handleChange method is called with missing hash', () => {
        const changeSpy = jest.fn(ColorPickerInput.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPickerInput.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        act(() => {
            render(<ColorPickerInput {...props} />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.type(inputDOM, 'f');
        jest.runAllTimers();

        expect(changeSpy).toHaveBeenCalledWith('#f');
        expect(changeCompleteSpy).toHaveBeenCalledWith('#f');
    });

    it('should call props.onChange and props.onChangeComplete when ColorPicker onChangeComplete is called', () => {
        const changeSpy = jest.fn(ColorPickerInput.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPickerInput.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        act(() => {
            render(<ColorPickerInput {...props} />);
        });
        const triggerDOM = document.getElementsByClassName(
            `${baseCls}__trigger`,
        )[0];
        userEvent.click(triggerDOM);
        const mockInputDOM = document.getElementsByClassName(colorPickerCls)[0];
        userEvent.type(mockInputDOM, 'f');
        jest.runAllTimers();

        expect(changeSpy).toHaveBeenCalled();
        expect(changeCompleteSpy).toHaveBeenCalled();
    });

    it('should only call onChangeComplete once when handleChange method is called multiple times', () => {
        const changeSpy = jest.fn(ColorPickerInput.defaultProps.onChange);
        const changeCompleteSpy = jest.fn(
            ColorPickerInput.defaultProps.onChangeComplete,
        );
        const props = {
            onChange: changeSpy,
            onChangeComplete: changeCompleteSpy,
        };
        act(() => {
            render(<ColorPickerInput {...props} />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.type(inputDOM, 'f');
        jest.advanceTimersByTime(100);
        userEvent.type(inputDOM, '0');
        jest.runOnlyPendingTimers();

        expect(changeSpy).toHaveBeenCalledTimes(2);
        expect(changeCompleteSpy).toHaveBeenCalledTimes(1);
    });

    it('should show the color picker when the trigger is clicked and the picker is not currently visible', () => {
        act(() => {
            render(<ColorPickerInput />);
        });
        const triggerDOM = document.getElementsByClassName(
            `${baseCls}__trigger`,
        )[0];
        let pickerContainerDOMs =
            document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);

        userEvent.click(triggerDOM);
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(1);
    });

    it('should hide the color picker when the trigger is clicked and the picker is currently visible', () => {
        act(() => {
            render(<ColorPickerInput />);
        });
        const triggerDOM = document.getElementsByClassName(
            `${baseCls}__trigger`,
        )[0];
        let pickerContainerDOMs =
            document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);

        userEvent.click(triggerDOM);
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(1);

        userEvent.click(triggerDOM);
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);
    });

    it('should hide the color picker when the user presses the escape key and the picker is currently visible', () => {
        act(() => {
            render(<ColorPickerInput />);
        });
        const triggerDOM = document.getElementsByClassName(
            `${baseCls}__trigger`,
        )[0];
        let pickerContainerDOMs =
            document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);

        userEvent.click(triggerDOM);
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(1);

        userEvent.keyboard('[Escape]');
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);
    });

    it('should hide the color picker when the user clicks outside of the picker and the picker is currently visible', () => {
        act(() => {
            render(<ColorPickerInput />);
        });
        const triggerDOM = document.getElementsByClassName(
            `${baseCls}__trigger`,
        )[0];
        let pickerContainerDOMs =
            document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);

        userEvent.click(triggerDOM);
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(1);

        userEvent.click(document.body);
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);
    });

    it('should not allow user to show the color picker when props.isDisabled is true', () => {
        act(() => {
            render(<ColorPickerInput isDisabled />);
        });
        const triggerDOM = document.getElementsByClassName(
            `${baseCls}__trigger`,
        )[0];
        let pickerContainerDOMs =
            document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);

        userEvent.click(triggerDOM);
        pickerContainerDOMs = document.getElementsByClassName(colorPickerCls);

        expect(pickerContainerDOMs).toHaveLength(0);
    });

    it('should only allow the user to type in 7 characters when props.hasAlpha is false', () => {
        act(() => {
            render(<ColorPickerInput />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.type(inputDOM, '#ffffffff');
        const result = inputDOM.value;

        expect(result).toBe('#ffffff');
    });

    it('should only allow the user to type in 9 characters when props.hasAlpha is true', () => {
        act(() => {
            render(<ColorPickerInput hasAlpha />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.type(inputDOM, '#ffffffff00');
        const result = inputDOM.value;

        expect(result).toBe('#ffffffff');
    });

    it('should render the trigger as a span instead of button to prevent user interaction when props.isReadOnly is true', () => {
        act(() => {
            render(<ColorPickerInput isReadOnly />);
        });
        const triggerDOM = document.getElementsByClassName(
            `${baseCls}__trigger`,
        )[0];
        const result = triggerDOM.tagName;

        expect(result).toBe('SPAN');
    });

    it('should render a transparent trigger swatch color when props.color is not a valid color', () => {
        act(() => {
            render(<ColorPickerInput color="#f" />);
        });
        const triggerSwatchDOM = document.getElementsByClassName(
            `${baseCls}__trigger-swatch`,
        )[0];
        const expected = 'background-color: transparent;';
        const result = triggerSwatchDOM.getAttribute('style');

        expect(result).toBe(expected);
    });

    it('should render a trigger swatch color set to props.color when it is a valid color', () => {
        act(() => {
            render(<ColorPickerInput color="#f00" />);
        });
        const triggerSwatchDOM = document.getElementsByClassName(
            `${baseCls}__trigger-swatch`,
        )[0];
        const expected = 'background-color: rgb(255, 0, 0);';
        const result = triggerSwatchDOM.getAttribute('style');

        expect(result).toBe(expected);
    });

    it('should set aria-invalid attribute on the input when props.hasError is true', () => {
        act(() => {
            render(<ColorPickerInput hasError />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        const expected = 'true';
        const result = inputDOM.getAttribute('aria-invalid');

        expect(result).toBe(expected);
    });

    // it('should ', () => {});
});
