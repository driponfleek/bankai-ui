import React from 'react';
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Component1 from '../Component1';

describe('<Component1 />', () => {
    it('should render without crashing', () => {
        render(<Component1 />);
    });

    // it('should ', () => {});
});
