import ColorPickerField from '../../../../../sb-components/form-elements/ColorPickerField';
import { FIELD_IDS_TO_LABEL_MAP } from '../../const/designTokenGenConst';

/**
 * @param {Object} props
 * @param {string} props.fieldId - Field identifier used to look up the label and current value
 * @param {Object} [props.fieldValues] - Map of field IDs to their current color values
 */
const DesignTokenColorPicker = (props) => {
    const { fieldId, fieldValues = {}, ...rest } = props;

    return (
        <ColorPickerField
            {...rest}
            value={fieldValues[fieldId]}
            color={fieldValues[fieldId]}
            labelProps={{
                content: FIELD_IDS_TO_LABEL_MAP[fieldId],
            }}
            fieldId={fieldId}
        />
    );
};

export default DesignTokenColorPicker;
