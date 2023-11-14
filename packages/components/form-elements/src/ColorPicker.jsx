import PropTypes from 'prop-types';
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

const ColorPicker = (props) => {
    const {
        contextCls,
        changeCompleteThreshold,
        color,
        hasAlpha,
        onChange,
        onChangeComplete,
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

ColorPicker.defaultProps = {
    changeCompleteThreshold: 200,
    hasAlpha: false,
    onChange: () => Promise.resolve(),
    onChangeComplete: () => Promise.resolve(),
};

ColorPicker.propTypes = {
    color: PropTypes.string,
    contextCls: PropTypes.string,
    changeCompleteThreshold: PropTypes.number,
    hasAlpha: PropTypes.bool,
    onChange: PropTypes.func,
    onChangeComplete: PropTypes.func,
};

export default ColorPicker;
