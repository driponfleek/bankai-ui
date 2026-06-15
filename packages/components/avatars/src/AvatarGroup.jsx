import { Children } from 'react';
import cx from 'classnames';
import Avatar from './Avatar';

// Styles
import './styles/avatar-group.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.shouldOverlap] - Whether avatars should visually overlap each other (defaults to true)
 * @param {Array<{imgURL?: string}>} [props.avatars] - Array of avatar prop objects to render; ignored when children are provided
 * @param {ReactNode} [props.children] - Child content; when provided, avatars prop is ignored
 */
const AvatarGroup = (props) => {
    const { contextCls, shouldOverlap = true, avatars = [], children } = props;
    const baseCls = 'bankai-avatar-group';
    const modCls = {
        [`${baseCls}--overlap`]: shouldOverlap,
    };

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {children ||
                Children.toArray(
                    avatars.map((avatar) => <Avatar {...avatar} />),
                )}
        </span>
    );
};

export default AvatarGroup;
