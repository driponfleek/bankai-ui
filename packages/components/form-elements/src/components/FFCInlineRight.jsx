import FFCControlHintContainer from './FFCControlHintContainer';
import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name forwarded to child layout components
 * @param {boolean} [props.hasLabel] - Whether to render the label component
 * @param {boolean} [props.shouldRenderHints] - Whether to render the hints component
 */
const FFCInlineRight = (props) => {
    const { baseCls, hasLabel, shouldRenderHints, children, ...rest } = props;

    return (
        <>
            {children}
            <FFCControlHintContainer baseCls={baseCls}>
                {hasLabel && <FFCLabel {...rest} baseCls={baseCls} />}
                {shouldRenderHints && <FFCHints {...rest} baseCls={baseCls} />}
            </FFCControlHintContainer>
        </>
    );
};

export default FFCInlineRight;
