import React from 'react';
import PropTypes from 'prop-types';

const ButtonIcon = (props) => {
    const { renderIcon, baseCls } = props;
    const baseIconCls = `${baseCls}__icon`;

    return (
        <span className={`${baseIconCls}-container`}>
            <span className={`${baseIconCls}-safe-space`}>
                <span className={baseIconCls}>
                    {renderIcon && renderIcon()}
                </span>
            </span>
        </span>
    );
};

ButtonIcon.propTypes = {
    baseCls: PropTypes.string.isRequired,
    renderIcon: PropTypes.func.isRequired,
};

export default ButtonIcon;
