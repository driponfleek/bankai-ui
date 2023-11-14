import PropTypes from 'prop-types';
import cx from 'classnames';
import ContrastRatioMeta from './ContrastRatioMeta';

// Utils
import { getIsContrastRatioMeta } from './utils/contrastMetaUtils';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
// import './styles/color-swatch-meta-li.scss';

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

ColorSwatchMetaLI.propTypes = {
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ColorSwatchMetaLI;
