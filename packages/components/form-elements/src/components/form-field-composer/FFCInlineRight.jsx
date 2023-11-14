import PropTypes from 'prop-types';
import FFCControlHintContainer from './FFCControlHintContainer';
import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

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

FFCInlineRight.propTypes = {
    baseCls: PropTypes.string,
    hasLabel: PropTypes.bool,
    shouldRenderHints: PropTypes.bool,
};

export default FFCInlineRight;
