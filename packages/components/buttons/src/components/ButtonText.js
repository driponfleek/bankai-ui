import React from 'react';
import PropTypes from 'prop-types';

const ButtonText = (props) => {
    const { baseCls, children } = props;

    return (
        <span className={`${baseCls}__text-container`}>
            <span className={`${baseCls}__text`}>{children}</span>
        </span>
    );
};

ButtonText.propTypes = {
    baseCls: PropTypes.string.isRequired,
};

export default ButtonText;
