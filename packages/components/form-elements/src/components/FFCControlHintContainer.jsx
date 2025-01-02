import PropTypes from 'prop-types';

const FFCControlHintContainer = (props) => {
    const { baseCls, children } = props;

    return (
        <div className={`${baseCls}__control-hint-container`}>{children}</div>
    );
};

FFCControlHintContainer.propTypes = {
    baseCls: PropTypes.string,
};

export default FFCControlHintContainer;
