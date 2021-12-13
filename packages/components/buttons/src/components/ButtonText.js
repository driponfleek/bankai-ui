import React from 'react';
import PropTypes from 'prop-types';

const ButtonText = (props) => {
    const { text, baseCls } = props;

    return (
        <span className={`${baseCls}__text-container`}>
            <span className={`${baseCls}__text`}>{text}</span>
        </span>
    );
};

ButtonText.propTypes = {
    baseCls: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ButtonText;
