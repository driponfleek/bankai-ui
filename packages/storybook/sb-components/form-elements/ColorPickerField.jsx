import PropTypes from 'prop-types';
import {
    ColorPickerInput,
    IFLFormFieldComposer,
} from '@driponfleek/bankai-ui-form-elements';

const CPIField = IFLFormFieldComposer(ColorPickerInput);

const ColorPickerField = (props) => {
    const { onChange, fieldId, ...rest } = props;
    const handleChange = (colorVal) => {
        const formattedVal = (colorVal ?? '').toLowerCase();

        onChange(formattedVal, fieldId);
    };

    return <CPIField {...rest} onChange={handleChange} />;
};

ColorPickerField.defaultProps = {
    onChange: () => Promise.resolve(),
};

ColorPickerField.propTypes = {
    fieldId: PropTypes.string,
    onChange: PropTypes.func,
};

export default ColorPickerField;
