import cx from 'classnames';
import {
    getIsContrastRatioMeta,
    getAbstractedContrastMeta,
} from './utils/contrastMetaUtils';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/contrast-ratio-meta.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.item] - Meta item; renders contrast ratio details if it matches the contrast meta shape, otherwise renders the item directly
 */
const ContrastRatioMeta = (props) => {
    const { contextCls, item } = props;
    const baseCls = `${COLOR_BASE_CLS}__contrast-ratio-meta`;
    const isContrastRatioMeta = getIsContrastRatioMeta(item);

    if (!isContrastRatioMeta) {
        return item;
    }

    const { bgColor, contrastRatio } = getAbstractedContrastMeta(item);

    return (
        <span className={cx(baseCls, contextCls)}>
            <span className={`${baseCls}-value`}>{contrastRatio}</span>{' '}
            <span
                className={`${baseCls}-color`}
                style={{ backgroundColor: bgColor }}
            />
        </span>
    );
};

export default ContrastRatioMeta;
