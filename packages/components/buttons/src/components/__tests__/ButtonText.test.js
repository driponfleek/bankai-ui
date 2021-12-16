/* eslint-disable no-console */
import React from 'react';
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import ButtonText from '../ButtonText';

const originalConsoleError = console.error.bind(console.error);

describe('<ButtonText />', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = undefined;
    });

    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<ButtonText />);
        console.error = originalConsoleError;
    });

    // it('should ', () => {});
});
