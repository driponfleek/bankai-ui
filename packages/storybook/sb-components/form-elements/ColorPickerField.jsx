import {
    ColorPickerInput,
    IFLFormFieldComposer,
} from '@driponfleek/bankai-ui-form-elements';

const CPIField = IFLFormFieldComposer(ColorPickerInput);

/**
 * @param {Object} props
 * @param {string} [props.fieldId] - Field identifier passed as the second argument to onChange
 * @param {Function} [props.onChange] - Called with the formatted color value and fieldId on change
 */
const ColorPickerField = (props) => {
    const { onChange = ColorPickerField.onChange, fieldId, ...rest } = props;
    const handleChange = (colorVal) => {
        const formattedVal = (colorVal ?? '').toLowerCase();

        onChange(formattedVal, fieldId);
    };

    return <CPIField {...rest} onChange={handleChange} />;
};

ColorPickerField.onChange = () => Promise.resolve();

export default ColorPickerField;
