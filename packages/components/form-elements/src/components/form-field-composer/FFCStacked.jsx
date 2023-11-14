import PropTypes from 'prop-types';
import FFCLabel from './FFCLabel';
import FFCHints from './FFCHints';

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

FFCStacked.propTypes = {
    baseCls: PropTypes.string,
    hasLabel: PropTypes.bool,
    shouldRenderHints: PropTypes.bool,
};

export default FFCStacked;
