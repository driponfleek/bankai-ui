/* eslint-disable no-console */
import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Fieldset from '../Fieldset';

const originalConsoleError = console.error.bind(console.error);
const baseCls = 'bankai-fieldset';

describe('<Fieldset />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<Fieldset />);
        console.error = originalConsoleError;
    });

    it('should set the form attribute when props.formId is defined', () => {
        const formId = 'fieldset-form-id';
        act(() => {
            render(<Fieldset formId={formId} />);
        });
        const fieldsetTextDOM = document.getElementsByClassName(baseCls)[0];
        const result = fieldsetTextDOM.getAttribute('form');

        expect(result).toBe(formId);
    });

    it('should set the name attribute when props.name is defined', () => {
        const name = 'fieldset-form-name';
        act(() => {
            render(<Fieldset name={name} />);
        });
        const fieldsetTextDOM = document.getElementsByClassName(baseCls)[0];
        const result = fieldsetTextDOM.getAttribute('name');

        expect(result).toBe(name);
    });

    // it('should ', () => {});
});
