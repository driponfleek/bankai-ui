import cx from 'classnames';

// Styles
import './styles/hyperlink.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} props.href - The URL the hyperlink points to
 * @param {boolean} [props.shouldOpenInNewWindow] - Whether to open the link in a new browser tab
 */
const Hyperlink = (props) => {
    const {
        href,
        shouldOpenInNewWindow = false,
        contextCls,
        children,
        ...rest
    } = props;
    const linkProps = {
        ...rest,
        href,
        ...(shouldOpenInNewWindow && {
            target: '_blank',
            rel: 'noopener noreferrer',
        }),
    };

    return (
        <a {...linkProps} className={cx('bankai-hyperlink', contextCls)}>
            {children}
        </a>
    );
};

export default Hyperlink;
