import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ToastContainer as ToasterListener } from 'react-toastify';

const ToastContainer = (props) => {
    const { appNodeId, containerId, ...rest } = props;
    const id = `${containerId}-listener`;
    const isAlreadyRendered = !!document.getElementById(id);
    const appDOMNode = document.getElementById(appNodeId);

    if (!isAlreadyRendered && appDOMNode) {
        const div = document.createElement('div');
        div.setAttribute('id', id);
        div.className = id;
        appDOMNode.appendChild(div);
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

ToastContainer.defaultProps = {
    appNodeId: 'root',
    containerId: 'bankai-toast-listener-container',
};

ToastContainer.defaultProps = {
    appNodeId: PropTypes.string,
    containerId: PropTypes.string,
};

export default ToastContainer;
