/* eslint-disable no-console */
import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Hyperlink from '../Hyperlink';

const originalConsoleError = console.error.bind(console.error);

describe('<Hyperlink />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<Hyperlink />);
        console.error = originalConsoleError;
    });

    it('should set the target and rel attributes to the appropriate values when props.shouldOpenInNewWindow is true', () => {
        act(() => {
            render(
                <Hyperlink href="https://google.com" shouldOpenInNewWindow>
                    Google
                </Hyperlink>,
            );
        });
        const linkDOM = document.getElementsByClassName('bankai-hyperlink')[0];
        const expectedTarget = '_blank';
        const expectedRel = 'noopener noreferrer';
        const resultTarget = linkDOM.getAttribute('target');
        const resultRel = linkDOM.getAttribute('rel');

        expect(resultTarget).toBe(expectedTarget);
        expect(resultRel).toBe(expectedRel);
    });

    // it('should ', () => {});
});
