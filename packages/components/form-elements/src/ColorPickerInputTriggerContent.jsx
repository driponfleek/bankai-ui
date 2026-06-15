import { isValidHexColor } from '@driponfleek/bankai-lib-color-utils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent trigger component
 * @param {string} [props.color] - Hex color string used as the swatch background
 */
const ColorPickerInputTriggerContent = (props) => {
    const { color, baseCls } = props;
    const isValid = isValidHexColor(color);
    const style = {
        backgroundColor: !isValid ? 'transparent' : color,
    };

    return <span className={`${baseCls}__trigger-swatch`} style={style} />;
};

export default ColorPickerInputTriggerContent;
