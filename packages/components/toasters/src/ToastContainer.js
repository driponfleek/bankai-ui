import React from 'react';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ToastContainer as ToasterListener } from 'react-toastify';

const ToastContainer = (props) => {
    const {
        appElement = document.querySelector('body'),
        containerId = 'bankai-toast-listener-container',
        ...rest
    } = props;
    const id = `${containerId}-listener`;
    const isAlreadyRendered = !!document.getElementById(id);
    const shouldRenderContainer = !isAlreadyRendered && !!appElement;

    if (shouldRenderContainer) {
        const div = document.createElement('div');
        div.setAttribute('id', id);
        div.className = id;
        appElement.appendChild(div);
        ReactDOM.render(
            <ToasterListener
                {...rest}
                className="bankai-toast-container"
                containerId={containerId}
            />,
            div,
        );
    }
};

// ToastContainer.defaultProps = {
//     appElement: document.querySelector('body'),
//     containerId: 'bankai-toast-listener-container',
// };

// ToastContainer.defaultProps = {
//     appElement: PropTypes.instanceOf(Element),
//     containerId: PropTypes.string,
// };

export default ToastContainer;
