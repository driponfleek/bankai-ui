import React from 'react';
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import GenericError from '../GenericError';

describe('<GenericError />', () => {
    it('should render without crashing', () => {
        render(<GenericError />);
    });

    // it('should ', () => {});
});
