import React from 'react';
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import AccordionContentComposer from '../AccordionContentComposer';

const Comp = () => <div />;
const ComposedComp = AccordionContentComposer(Comp);

describe('<AccordionContentComposer />', () => {
    it('should render without crashing', () => {
        render(<ComposedComp />);
    });

    // it('should ', () => {});
});
