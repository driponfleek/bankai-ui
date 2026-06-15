const withPassthrough = (Comp) => {
    /**
     * @param {Object} props
     * @param {boolean} [props.shouldRetainLayout] - Consumed by layout composers to skip automatic wrapping; not forwarded to the wrapped component
     */
    const Wrapped = (props) => {
        const { shouldRetainLayout, ...rest } = props;

        return <Comp {...rest} />;
    };

    return Wrapped;
};

const RetainLayoutComposer = withPassthrough;

export default RetainLayoutComposer;
