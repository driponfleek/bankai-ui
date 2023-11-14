import PropTypes from 'prop-types';
import ColorPickerField from '../ColorPickerField';
import { FIELD_IDS_TO_LABEL_MAP } from '../../const/designTokenGenConst';

const DesignTokenColorPicker = (props) => {
    const { fieldId, fieldValues, ...rest } = props;

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

DesignTokenColorPicker.defaultProps = {
    fieldValues: {},
};

DesignTokenColorPicker.propTypes = {
    fieldId: PropTypes.string.isRequired,
    fieldValues: PropTypes.object,
};

export default DesignTokenColorPicker;
