import { ToastContainer as ToasterListener } from 'react-toastify';
import ReactDOM from 'react-dom/client';

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
        const root = ReactDOM.createRoot(div);

        root.render(
            <ToasterListener
                {...rest}
                className="bankai-toast-container"
                containerId={containerId}
            />,
        );
    }
};

export default ToastContainer;
