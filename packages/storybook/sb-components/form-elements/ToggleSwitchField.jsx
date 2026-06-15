import {
    FormFieldComposer,
    ToggleSwitch,
    FORM_FIELD_COMP_VARIANTS,
} from '@driponfleek/bankai-ui-form-elements';

const { INLINE_RIGHT } = FORM_FIELD_COMP_VARIANTS;
const ToggleField = FormFieldComposer(ToggleSwitch);

/**
 * @param {Object} props
 * @param {string} [props.fieldId] - Field identifier passed as the second argument to onChange
 * @param {Function} [props.onChange] - Called with toggle params and fieldId on change
 */
const ToggleSwitchField = (props) => {
    const { onChange = ToggleSwitchField.onChange, fieldId, ...rest } = props;
    const handleChange = (params) => {
        onChange(params, fieldId);
    };

    return (
        <ToggleField {...rest} onChange={handleChange} variant={INLINE_RIGHT} />
    );
};

ToggleSwitchField.onChange = () => Promise.resolve();

export default ToggleSwitchField;
