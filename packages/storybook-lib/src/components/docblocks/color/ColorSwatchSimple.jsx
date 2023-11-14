import cx from 'classnames';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/color-swatch-simple.scss';

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
