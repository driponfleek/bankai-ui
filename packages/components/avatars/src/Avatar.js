import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/avatar.scss';

const Avatar = (props) => {
    const { contextCls, imgURL, hasBorder, children } = props;
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

Avatar.defaultProps = {
    hasBorder: true,
};

Avatar.propTypes = {
    contextCls: PropTypes.string,
    imgURL: PropTypes.string,
    hasBorder: PropTypes.bool,
};

export default Avatar;
