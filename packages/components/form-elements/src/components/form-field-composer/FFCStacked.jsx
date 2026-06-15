import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name forwarded to child layout components
 * @param {boolean} [props.hasLabel] - Whether to render the label component
 * @param {boolean} [props.shouldRenderHints] - Whether to render the hints component
 */
const FFCStacked = (props) => {
    const { baseCls, hasLabel, shouldRenderHints, children, ...rest } = props;

    return (
        <>
            {hasLabel && <FFCLabel {...rest} baseCls={baseCls} />}
            {children}
            {shouldRenderHints && <FFCHints {...rest} baseCls={baseCls} />}
        </>
    );
};

export default FFCStacked;
