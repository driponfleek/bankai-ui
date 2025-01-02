import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    isValidHexColor,
    getNewColorByLightnessAdjustment,
} from '@driponfleek/bankai-lib-color-utils';
import {
    getPrioritizedAppTextColor,
    CORE_COLOR_NEUTRAL_SEED_DEFAULT,
} from '@driponfleek/bankai-lib-theme-utils';
import ColorSwatchDetails from './ColorSwatchDetails';
import ColorSwatchMetaList from './ColorSwatchMetaList';

// Utils
import { getIsContrastRatioMeta } from './utils/contrastMetaUtils';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/color-swatch.scss';

const ColorSwatch = (props) => {
    const { contextCls, color, hasAlpha, isFancy, mainContent, metaList } =
        props;
    const isValidColor = isValidHexColor(color, hasAlpha);
    const preferredDarkTextColor = getNewColorByLightnessAdjustment(
        CORE_COLOR_NEUTRAL_SEED_DEFAULT,
        10,
    );
    const preferredLightTextColor = getNewColorByLightnessAdjustment(
        CORE_COLOR_NEUTRAL_SEED_DEFAULT,
        90,
    );
    const modCls = {
        [`${COLOR_BASE_CLS}--fancy`]: isFancy,
        [`${COLOR_BASE_CLS}--standard`]: !isFancy,
    };

    if (!isValidColor) {
        // TODO: Show invalid color state instead of this
        console.error(
            `The color provided to ColorSwatch is invalid (${color})`,
        );

        return undefined;
    }

    const textColor = getPrioritizedAppTextColor({
        baseHex: color,
        preferredDarkTextColor,
        preferredLightTextColor,
    });
    const swatchStyle = {
        color: textColor,
        backgroundColor: color,
    };
    const textStyle = {
        ...(!isFancy && { color: textColor }),
    };
    const contrastMeta = isFancy
        ? metaList.filter((meta) => getIsContrastRatioMeta(meta))
        : [];
    const sanatizedMeta = isFancy
        ? metaList.filter((meta) => !getIsContrastRatioMeta(meta))
        : metaList;

    return (
        <div className={cx(COLOR_BASE_CLS, modCls, contextCls)}>
            <div
                className={`${COLOR_BASE_CLS}__swatch-color`}
                style={swatchStyle}
            >
                {isFancy && contrastMeta.length > 0 && (
                    <ColorSwatchMetaList metaList={contrastMeta} />
                )}
            </div>
            <div className={`${COLOR_BASE_CLS}__inner`} style={textStyle}>
                <ColorSwatchDetails
                    mainContent={mainContent || color}
                    metaList={sanatizedMeta}
                />
            </div>
        </div>
    );
};

ColorSwatch.defaultProps = {
    metaList: [],
    hasAlpha: false,
    isFancy: false,
};

ColorSwatch.propTypes = {
    contextCls: PropTypes.string,
    mainContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    metaList: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
    color: PropTypes.string.isRequired,
    hasAlpha: PropTypes.bool,
    isFancy: PropTypes.bool,
};

export default ColorSwatch;
