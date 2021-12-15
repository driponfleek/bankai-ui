/* eslint-disable no-console */
import React from 'react';
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import ButtonIcon from '../ButtonIcon';

const originalConsoleError = console.error.bind(console.error);

describe('<ButtonIcon />', () => {
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
        render(<ButtonIcon />);
        console.error = originalConsoleError;
    });

    // it('should ', () => {});
});
