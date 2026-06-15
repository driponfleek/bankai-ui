import cx from 'classnames';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const FormLayoutActionsContainer = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-actions-container';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

export default FormLayoutActionsContainer;
