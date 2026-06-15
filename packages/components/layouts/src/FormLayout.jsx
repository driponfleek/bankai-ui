import cx from 'classnames';

// Styles
import './styles/form-layout.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const FormLayout = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

export default FormLayout;
