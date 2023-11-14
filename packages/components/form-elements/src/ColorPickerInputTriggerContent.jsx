import PropTypes from 'prop-types';
import { isValidHexColor } from '@driponfleek/bankai-lib-color-utils';

const ColorPickerInputTriggerContent = (props) => {
    const { color, baseCls } = props;
    const isValid = isValidHexColor(color);
    const style = {
        backgroundColor: !isValid ? 'transparent' : color,
    };

    return <span className={`${baseCls}__trigger-swatch`} style={style} />;
};

ColorPickerInputTriggerContent.propTypes = {
    baseCls: PropTypes.string,
    color: PropTypes.string,
};

export default ColorPickerInputTriggerContent;
