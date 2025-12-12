const withPassthrough = (Comp) => {
    const Wrapped = (props) => {
        const { shouldRetainLayout, ...rest } = props;

        return <Comp {...rest} />;
    };

    return Wrapped;
};

const RetainLayoutComposer = withPassthrough;

export default RetainLayoutComposer;
