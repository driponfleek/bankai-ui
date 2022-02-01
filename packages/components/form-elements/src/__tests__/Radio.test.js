import React from 'react';
import {
    render,
    act,
    userEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Radio from '../Radio';

const baseCls = 'bankai-radio';

describe('<Radio />', () => {
    it('should render without crashing', () => {
        render(<Radio />);
    });

    it('should not render the checked icon when isChecked is not set to true', () => {
        act(() => {
            render(<Radio />);
        });
        const iconDOMs = document.getElementsByClassName(`${baseCls}__icon`);

        expect(iconDOMs).toHaveLength(0);
    });

    it('should render the checked icon when isChecked is set to true', () => {
        act(() => {
            render(<Radio isChecked />);
        });
        const iconDOMs = document.getElementsByClassName(`${baseCls}__icon`);

        expect(iconDOMs).toHaveLength(1);
    });

    it('should render a custom checked icon instead of the default one when props.renderCheckedIcon is defined', () => {
        const testCls = 'custom-checked-icon';
        act(() => {
            render(
                <Radio
                    renderCheckedIcon={() => <span className={testCls} />}
                    isChecked
                />,
            );
        });
        const iconDOMs = document.getElementsByClassName(testCls);

        expect(iconDOMs).toHaveLength(1);
    });

    it('should call props.onChange when the Radio is clicked', () => {
        const changeSpy = jest.fn(Radio.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
        };
        act(() => {
            render(<Radio {...props} />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.click(inputDOM);

        expect(changeSpy).toHaveBeenCalled();
    });

    it('should not call props.onChange when props.isDisabled is true and the Radio is clicked', () => {
        const changeSpy = jest.fn(Radio.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
            isDisabled: true,
        };
        act(() => {
            render(<Radio {...props} />);
        });
        const inputDOM = document.getElementsByClassName(
            `${baseCls}__input`,
        )[0];
        userEvent.click(inputDOM);

        expect(changeSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
