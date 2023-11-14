import PropTypes from 'prop-types';
import FFCControlHintContainer from './FFCControlHintContainer';
import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

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

FFCToggle.propTypes = {
    baseCls: PropTypes.string,
    hasLabel: PropTypes.bool,
    shouldRenderHints: PropTypes.bool,
};

export default FFCToggle;
