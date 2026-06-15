import cx from 'classnames';

// Styles
import './styles/form-layout-row.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const FormLayoutRow = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-row';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

export default FormLayoutRow;
