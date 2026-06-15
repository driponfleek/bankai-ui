import cx from 'classnames';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const FormLayoutFieldContainer = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-field-container';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

export default FormLayoutFieldContainer;
