import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Avatar from './Avatar';

// Styles
import './styles/avatar-group.scss';

const AvatarGroup = (props) => {
    const { contextCls, shouldOverlap, avatars, children } = props;
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

AvatarGroup.defaultProps = {
    shouldOverlap: true,
    avatars: [],
};

AvatarGroup.propTypes = {
    contextCls: PropTypes.string,
    shouldOverlap: PropTypes.bool,
    avatars: PropTypes.arrayOf(
        PropTypes.shape({
            imgURL: PropTypes.string,
        }),
    ),
};

export default AvatarGroup;
