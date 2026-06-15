import cx from 'classnames';

// Styles
import './styles/form-label.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.htmlFor] - ID of the form control this label is associated with
 * @param {string|React.ReactElement|React.ReactNode} props.content - Label text or content
 */
const FormLabel = (props) => {
    const { contextCls, htmlFor, content, ...rest } = props;
    const baseCls = 'bankai-form-label';

    return (
        <label {...rest} className={cx(baseCls, contextCls)} htmlFor={htmlFor}>
            <span className={`${baseCls}__content`}>{content}</span>
        </label>
    );
};

export default FormLabel;
