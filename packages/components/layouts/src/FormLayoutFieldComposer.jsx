import FormLayoutFieldContainer from './FormLayoutFieldContainer';

const withFormLayoutFieldContainer = (Comp) => {
    /**
     * @param {Object} props
     * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the FormLayoutFieldContainer wrapper
     * @param {string} [props.compContextCls] - Additional CSS class name(s) to apply to the wrapped component
     */
    const Wrapped = (props) => {
        const { contextCls, compContextCls, ...rest } = props;

        return (
            <FormLayoutFieldContainer contextCls={contextCls}>
                <Comp {...rest} contextCls={compContextCls} />
            </FormLayoutFieldContainer>
        );
    };

    return Wrapped;
};

const FormLayoutFieldComposer = withFormLayoutFieldContainer;

export default FormLayoutFieldComposer;
