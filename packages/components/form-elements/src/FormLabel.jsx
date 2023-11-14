import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-label.scss';

const FormLabel = (props) => {
    const { contextCls, htmlFor, content, ...rest } = props;
    const baseCls = 'bankai-form-label';

    return (
        <label {...rest} className={cx(baseCls, contextCls)} htmlFor={htmlFor}>
            <span className={`${baseCls}__content`}>{content}</span>
        </label>
    );
};

FormLabel.propTypes = {
    contextCls: PropTypes.string,
    htmlFor: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]).isRequired,
};

export default FormLabel;
