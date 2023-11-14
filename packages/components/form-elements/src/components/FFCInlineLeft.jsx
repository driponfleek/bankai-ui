import PropTypes from 'prop-types';
import FFCControlHintContainer from './FFCControlHintContainer';
import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

const FFCInlineLeft = (props) => {
    const { baseCls, hasLabel, shouldRenderHints, children, ...rest } = props;

    return (
        <>
            <FFCControlHintContainer baseCls={baseCls}>
                {hasLabel && <FFCLabel {...rest} baseCls={baseCls} />}
                {shouldRenderHints && <FFCHints {...rest} baseCls={baseCls} />}
            </FFCControlHintContainer>
            {children}
        </>
    );
};

FFCInlineLeft.propTypes = {
    baseCls: PropTypes.string,
    hasLabel: PropTypes.bool,
    shouldRenderHints: PropTypes.bool,
};

export default FFCInlineLeft;
