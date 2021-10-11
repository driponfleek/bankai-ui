import React from 'react';
import ReactDOM from 'react-dom';
import Component2 from '../Component2';

describe('<Component2 />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Component2 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // it('should ', () => {});
});
