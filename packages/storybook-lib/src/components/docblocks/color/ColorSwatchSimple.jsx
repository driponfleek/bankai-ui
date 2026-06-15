import cx from 'classnames';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/color-swatch-simple.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.color] - CSS color value applied as the swatch background
 */
const ColorSwatchSimple = (props) => {
    const { contextCls, color } = props;
    const baseCls = `${COLOR_BASE_CLS}-simple`;

    const swatchStyle = {
        backgroundColor: color,
    };

    return (
        <span className={cx(baseCls, contextCls)}>
            <span className={`${baseCls}__color`} style={swatchStyle} />
        </span>
    );
};

export default ColorSwatchSimple;
