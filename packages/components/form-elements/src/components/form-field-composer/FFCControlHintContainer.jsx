/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the container class
 */
const FFCControlHintContainer = (props) => {
    const { baseCls, children } = props;

    return (
        <div className={`${baseCls}__control-hint-container`}>{children}</div>
    );
};

export default FFCControlHintContainer;
