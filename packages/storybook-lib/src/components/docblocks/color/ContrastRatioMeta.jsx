import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    getIsContrastRatioMeta,
    getAbstractedContrastMeta,
} from './utils/contrastMetaUtils';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/contrast-ratio-meta.scss';

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

ContrastRatioMeta.propTypes = {
    contextCls: PropTypes.string,
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ContrastRatioMeta;
