import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
// import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import Avatar from '../Avatar';

describe('<Avatar />', () => {
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
        render(<Avatar />);
    });

    // it('should ', () => {});
});
