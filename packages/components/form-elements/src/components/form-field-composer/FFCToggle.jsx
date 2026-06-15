import FFCControlHintContainer from './FFCControlHintContainer';
import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name forwarded to child layout components
 * @param {boolean} [props.hasLabel] - Whether to render the label component
 * @param {boolean} [props.shouldRenderHints] - Whether to render the hints component
 */
const FFCToggle = (props) => {
    const { baseCls, hasLabel, shouldRenderHints, children, ...rest } = props;

    return (
        <>
            <FFCControlHintContainer baseCls={baseCls}>
                {children}
                {hasLabel && <FFCLabel {...rest} baseCls={baseCls} />}
            </FFCControlHintContainer>
            {shouldRenderHints && <FFCHints {...rest} baseCls={baseCls} />}
        </>
    );
};

export default FFCToggle;
