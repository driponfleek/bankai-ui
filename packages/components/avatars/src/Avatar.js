import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import VARIANTS from './const/variantConst';

// Styles
import './styles/avatar.scss';

const Avatar = (props) => {
    const { contextCls, text, imgURL, variant, hasBorder, renderIcon } = props;
    const shouldRenderImg = !!imgURL;
    const style = {
        ...(shouldRenderImg && { backgroundImage: `url('${imgURL}')` }),
    };
    const baseCls = 'bankai-avatar';
    const modCls = {
        [`${baseCls}--icon`]: !!renderIcon && !shouldRenderImg,
        [`${baseCls}--img`]: shouldRenderImg,
        [`${baseCls}--text`]: !!text && !shouldRenderImg && !renderIcon,
        [`${baseCls}--has-border`]: hasBorder,
        [`${baseCls}--circle`]: variant === VARIANTS.CIRCLE,
        [`${baseCls}--rounded-square`]: variant === VARIANTS.ROUNDED_SQUARE,
        [`${baseCls}--square`]: variant === VARIANTS.SQUARE,
    };

    return (
        <span className={cx(baseCls, modCls, contextCls)} style={style}>
            {!shouldRenderImg && (
                <span className={`${baseCls}__inner`}>
                    {renderIcon ? renderIcon() : text}
                </span>
            )}
        </span>
    );
};

Avatar.defaultProps = {
    hasBorder: true,
    variant: VARIANTS.CIRCLE,
};

Avatar.propTypes = {
    contextCls: PropTypes.string,
    imgURL: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
    hasBorder: PropTypes.bool,
    renderIcon: PropTypes.func,
};

export default Avatar;
