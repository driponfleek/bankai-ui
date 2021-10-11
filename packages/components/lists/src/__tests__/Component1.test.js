import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from '../Component1';

describe('<Component1 />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Component1 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // it('should ', () => {});
});
