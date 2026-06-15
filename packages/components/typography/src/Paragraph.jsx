import cx from 'classnames';

// Styles
import './styles/paragraph.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const Paragraph = (props) => {
    const { contextCls, children, ...rest } = props;
    const baseCls = 'bankai-paragraph';

    return (
        <p {...rest} className={cx(baseCls, contextCls)}>
            {children}
        </p>
    );
};

export default Paragraph;
