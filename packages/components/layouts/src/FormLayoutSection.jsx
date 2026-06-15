import cx from 'classnames';

// Styles
import './styles/form-layout-section.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const FormLayoutSection = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-section';

    return (
        <div className={cx(baseCls, contextCls)}>
            <div className={`${baseCls}__content-container`}>{children}</div>
        </div>
    );
};

export default FormLayoutSection;
