import cx from 'classnames';
import { debounce } from '@driponfleek/bankai-lib-helper-utils';
import {
    convertColorToHex,
    convertColorToRGB,
} from '@driponfleek/bankai-lib-color-utils';
import { RgbColorPicker, RgbaColorPicker } from 'react-colorful';

// Utils
import { getColorPickerSanatizedColor } from './utils/colorPickerUtils';

// Styles
import './styles/color-picker.scss';

/**
 * @param {Object} props
 * @param {string} [props.color] - Current color value (hex string)
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {number} [props.changeCompleteThreshold] - Debounce delay in ms for the `onChangeComplete` callback
 * @param {boolean} [props.hasAlpha] - Whether to render an RGBA picker instead of RGB
 * @param {Function} [props.onChange] - Callback fired on every color change
 * @param {Function} [props.onChangeComplete] - Debounced callback fired after color change settles
 */
const ColorPicker = (props) => {
    const {
        contextCls,
        changeCompleteThreshold = 200,
        color,
        hasAlpha = false,
        onChange = ColorPicker.onChange,
        onChangeComplete = ColorPicker.onChangeComplete,
    } = props;
    const baseCls = 'bankai-color-picker';
    const Picker = hasAlpha ? RgbaColorPicker : RgbColorPicker;
    const sanatizedColor = getColorPickerSanatizedColor(color);
    // Handle Change Complete
    const handleChangeComplete = (newColor) =>
        debounce(() => {
            onChangeComplete(newColor);
        }, changeCompleteThreshold);
    // Handle Change
    const handleChange = (returnedColor) => {
        const newColor = hasAlpha
            ? convertColorToRGB(returnedColor, true)
            : convertColorToHex(returnedColor);

        onChange(newColor);
        handleChangeComplete(newColor);
    };

    return (
        <Picker
            className={cx(baseCls, contextCls)}
            color={sanatizedColor}
            onChange={handleChange}
        />
    );
};

ColorPicker.onChange = () => Promise.resolve();
ColorPicker.onChangeComplete = () => Promise.resolve();

export default ColorPicker;
