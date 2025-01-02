import PropTypes from 'prop-types';
import FormLayoutFieldContainer from './FormLayoutFieldContainer';

const withFormLayoutFieldContainer = (Comp) => {
    const Wrapped = (props) => {
        const { contextCls, compContextCls, ...rest } = props;

        return (
            <FormLayoutFieldContainer contextCls={contextCls}>
                <Comp {...rest} contextCls={compContextCls} />
            </FormLayoutFieldContainer>
        );
    };

    Wrapped.propTypes = {
        contextCls: PropTypes.string,
        compContextCls: PropTypes.string,
    };

    return Wrapped;
};

const FormLayoutFieldComposer = withFormLayoutFieldContainer;

export default FormLayoutFieldComposer;
