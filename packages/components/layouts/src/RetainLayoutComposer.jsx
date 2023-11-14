import PropTypes from 'prop-types';

const withPassthrough = (Comp) => {
    const Wrapped = (props) => {
        const { shouldRetainLayout, ...rest } = props;

        return <Comp {...rest} />;
    };

    Wrapped.defaultProps = {
        shouldRetainLayout: true,
    };

    Wrapped.propTypes = {
        shouldRetainLayout: PropTypes.bool,
    };

    return Wrapped;
};

const RetainLayoutComposer = withPassthrough;

export default RetainLayoutComposer;
