import PropTypes from 'prop-types';
import ARIALive from './ARIALive';

const withARIALive = (Comp) => {
    const Wrapper = (props) => {
        const { ariaLiveProps, ...rest } = props;

        return (
            <ARIALive {...ariaLiveProps}>
                <Comp {...rest} />
            </ARIALive>
        );
    };

    Wrapper.propTypes = {
        ariaLiveProps: PropTypes.shape({
            ariaRelevant: PropTypes.string,
            baseCls: PropTypes.string,
            contextCls: PropTypes.string,
            htmlTag: PropTypes.string,
            id: PropTypes.string,
            isAtomic: PropTypes.bool,
            isPolite: PropTypes.bool,
        }),
    };

    return Wrapper;
};

const ARIALiveComposer = withARIALive;

export default ARIALiveComposer;
