import React from 'react';
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
                avatars.map((avatar) => {
                    const { id } = avatar;

                    return <Avatar key={id} {...avatar} />;
                })}
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
            id: PropTypes.string,
            imgURL: PropTypes.string,
        }),
    ),
};

export default AvatarGroup;
