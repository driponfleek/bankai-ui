import cx from 'classnames';
import ContrastRatioMeta from './ContrastRatioMeta';

// Utils
import { getIsContrastRatioMeta } from './utils/contrastMetaUtils';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
// import './styles/color-swatch-meta-li.scss';

/**
 * @param {Object} props
 * @param {string|React.ReactElement} [props.item] - Meta item to render; contrast ratio metadata is rendered with ContrastRatioMeta
 */
const ColorSwatchMetaLI = (props) => {
    const baseCls = `${COLOR_BASE_CLS}__meta-list-item`;
    const { item } = props;
    const isContrastRatio = getIsContrastRatioMeta(item);
    const modCls = {
        [`${baseCls}--contrast-ratio`]: isContrastRatio,
    };

    return (
        <li className={cx(baseCls, modCls)}>
            <ContrastRatioMeta item={item} />
        </li>
    );
};

export default ColorSwatchMetaLI;
