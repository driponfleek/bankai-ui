import cx from 'classnames';

// Styles
import './styles/avatar.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.imgURL] - URL of the avatar image; when provided renders as a background image
 * @param {boolean} [props.hasBorder] - Whether to render a border around the avatar (defaults to true)
 * @param {ReactNode} [props.children] - Child content rendered inside the avatar when no image URL is provided
 */
const Avatar = (props) => {
    const { contextCls, imgURL, hasBorder = true, children } = props;
    const shouldRenderImg = !!imgURL;
    const style = {
        ...(shouldRenderImg && { backgroundImage: `url('${imgURL}')` }),
    };
    const baseCls = 'bankai-avatar';
    const modCls = {
        [`${baseCls}--img`]: shouldRenderImg,
        [`${baseCls}--has-border`]: hasBorder,
    };

    return (
        <span className={cx(baseCls, modCls, contextCls)} style={style}>
            {!shouldRenderImg && children && (
                <span className={`${baseCls}__inner`}>{children}</span>
            )}
        </span>
    );
};

export default Avatar;
