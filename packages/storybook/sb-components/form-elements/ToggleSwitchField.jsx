import PropTypes from 'prop-types';
import {
    FormFieldComposer,
    ToggleSwitch,
    FORM_FIELD_COMP_VARIANTS,
} from '@driponfleek/bankai-ui-form-elements';

const { INLINE_RIGHT } = FORM_FIELD_COMP_VARIANTS;
const ToggleField = FormFieldComposer(ToggleSwitch);

const ToggleSwitchField = (props) => {
    const { onChange, fieldId, ...rest } = props;
    const handleChange = (params) => {
        onChange(params, fieldId);
    };

    return (
        <ToggleField {...rest} onChange={handleChange} variant={INLINE_RIGHT} />
    );
};

ToggleSwitchField.defaultProps = {
    onChange: () => Promise.resolve(),
};

ToggleSwitchField.propTypes = {
    fieldId: PropTypes.string,
    onChange: PropTypes.func,
};

export default ToggleSwitchField;
