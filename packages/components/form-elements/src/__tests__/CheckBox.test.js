import React from 'react';
import {
    render,
    act,
    userEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Checkbox from '../Checkbox';

const baseCls = 'bankai-checkbox';

describe('<Checkbox />', () => {
    it('should render without crashing', () => {
        render(<Checkbox />);
    });

    it('should not render the checked icon when isChecked is not set to true', () => {
        act(() => {
            render(<Checkbox />);
        });
        const iconDOMs = document.getElementsByClassName(`${baseCls}__icon`);

        expect(iconDOMs).toHaveLength(0);
    });

    it('should render the checked icon when isChecked is set to true', () => {
        act(() => {
            render(<Checkbox isChecked />);
        });
        const iconDOMs = document.getElementsByClassName(`${baseCls}__icon`);

        expect(iconDOMs).toHaveLength(1);
    });

    it('should render a custom checked icon instead of the default one when props.renderCheckedIcon is defined', () => {
        const testCls = 'custom-checked-icon';
        act(() => {
            render(
                <Checkbox
                    renderCheckedIcon={() => <span className={testCls} />}
                    isChecked
                />,
            );
        });
        const iconDOMs = document.getElementsByClassName(testCls);

        expect(iconDOMs).toHaveLength(1);
    });

    it('should call props.onChange when the checkbox is clicked', () => {
        const changeSpy = jest.fn(Checkbox.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
        };
        act(() => {
            render(<Checkbox {...props} />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.click(inputDOM);

        expect(changeSpy).toHaveBeenCalled();
    });

    it('should not call props.onChange when props.isDisabled is true and the checkbox is clicked', () => {
        const changeSpy = jest.fn(Checkbox.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
            isDisabled: true,
        };
        act(() => {
            render(<Checkbox {...props} />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.click(inputDOM);

        expect(changeSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
