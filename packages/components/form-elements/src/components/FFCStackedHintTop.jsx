import PropTypes from 'prop-types';
import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

const FFCStackedHintTop = (props) => {
    const { baseCls, hasLabel, shouldRenderHints, children, ...rest } = props;

    return (
        <>
            {hasLabel && <FFCLabel {...rest} baseCls={baseCls} />}
            {shouldRenderHints && <FFCHints {...rest} baseCls={baseCls} />}
            {children}
        </>
    );
};

FFCStackedHintTop.propTypes = {
    baseCls: PropTypes.string,
    hasLabel: PropTypes.bool,
    shouldRenderHints: PropTypes.bool,
};

export default FFCStackedHintTop;
