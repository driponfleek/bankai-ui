import { isValidHexColor } from '@driponfleek/bankai-lib-color-utils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the swatch class
 * @param {string} [props.color] - Hex color string to display as the swatch background
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
