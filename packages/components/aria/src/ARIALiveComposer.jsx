import ARIALive from './ARIALive';

const withARIALive = (Comp) => {
    /**
     * @param {Object} props
     * @param {Object} [props.ariaLiveProps] - Props forwarded to the ARIALive wrapper ({ ariaRelevant, baseCls, contextCls, htmlTag, id, isAtomic, isPolite })
     */
    const Wrapper = (props) => {
        const { ariaLiveProps, ...rest } = props;

        return (
            <ARIALive {...ariaLiveProps}>
                <Comp {...rest} />
            </ARIALive>
        );
    };

    return Wrapper;
};

const ARIALiveComposer = withARIALive;

export default ARIALiveComposer;
