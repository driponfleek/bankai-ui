import React from 'react';
import {
    render,
    act,
    userEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import TextInput from '../TextInput';

const baseCls = 'bankai-text-input';

describe('<TextInput />', () => {
    it('should render without crashing', () => {
        render(<TextInput />);
    });

    it('should call props.onChange when user types a value in the textarea', () => {
        const changeSpy = jest.fn(TextInput.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
        };
        act(() => {
            render(<TextInput {...props} />);
        });
        const textareaDOM = document.getElementsByClassName(baseCls)[0];
        userEvent.type(textareaDOM, 'a');

        expect(changeSpy).toHaveBeenCalled();
    });

    it('should enforce autoComplete to be set to "off" when props.isProtected is true', () => {
        act(() => {
            render(<TextInput shouldAutoComplete isProtected />);
        });
        const inputDOM = document.getElementsByClassName(baseCls)[0];
        const autoCompleteAttr = inputDOM.getAttribute('autocomplete');
        const typeAttr = inputDOM.getAttribute('type');

        expect(autoCompleteAttr).toBe('off');
        expect(typeAttr).toBe('password');
    });

    it('should set the correct attributes on the text input via getExtantProps', () => {
        act(() => {
            render(
                <TextInput
                    hasError
                    isDisabled
                    isReadOnly
                    shouldAutoComplete
                    shouldAutoFocus
                    shouldSpellCheck
                />,
            );
        });
        const inputDOM = document.getElementsByClassName(baseCls)[0];
        const autoCompleteAttr = inputDOM.getAttribute('autocomplete');
        const ariaAttr = inputDOM.getAttribute('aria-invalid');
        const disabledAttr = inputDOM.hasAttribute('disabled');
        const readOnlyAttr = inputDOM.hasAttribute('readonly');
        const spellCheckAttr = inputDOM.getAttribute('spellcheck');

        expect(autoCompleteAttr).toBe('on');
        expect(ariaAttr).toBe('true');
        expect(disabledAttr).toBe(true);
        expect(readOnlyAttr).toBe(true);
        expect(spellCheckAttr).toBe('true');
    });

    // it('should ', () => {});
});
