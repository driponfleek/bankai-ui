import { useMemo } from 'react';
import cx from 'classnames';
import {
    getSanitizedHex,
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

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.color] - Hex color value for the swatch
 * @param {boolean} [props.hasAlpha] - Indicates the color includes an alpha channel
 * @param {boolean} [props.isCard] - Renders in card style instead of block style
 * @param {string|React.ReactElement} [props.mainContent] - Primary content displayed in the swatch details section
 * @param {Array<string|React.ReactElement>} [props.metaList] - Meta items displayed beneath the main content
 * @param {React.ReactNode} [props.children] - When provided, replaces the default ColorSwatchDetails content in the inner section
 */
const ColorSwatch = (props) => {
    const {
        contextCls,
        color,
        hasAlpha = false,
        isCard = false,
        mainContent,
        metaList = [],
        children,
    } = props;
    const hasNoColor = !color;
    const sanitizedHex = getSanitizedHex(color, hasAlpha);
    // TODO: Move this to utility file
    const preferredDarkTextColor = useMemo(
        () =>
            getNewColorByLightnessAdjustment(
                CORE_COLOR_NEUTRAL_SEED_DEFAULT,
                10,
            ),
        [],
    );
    const preferredLightTextColor = useMemo(
        () =>
            getNewColorByLightnessAdjustment(
                CORE_COLOR_NEUTRAL_SEED_DEFAULT,
                90,
            ),
        [],
    );
    const textColor = getPrioritizedAppTextColor({
        baseHex: sanitizedHex,
        preferredDarkTextColor,
        preferredLightTextColor,
    });
    // TODO: Move this to utility file
    const modCls = useMemo(
        () => ({
            [`${COLOR_BASE_CLS}--swatch-card`]: isCard,
            [`${COLOR_BASE_CLS}--swatch-block`]: !isCard,
            [`${COLOR_BASE_CLS}--no-color`]: hasNoColor,
        }),
        [isCard, hasNoColor],
    );

    const swatchStyle = {
        color: textColor,
        ...(!hasNoColor && { backgroundColor: sanitizedHex }),
    };
    const textStyle = {
        ...(!isCard && { color: textColor }),
    };
    const { contrastMeta, sanitizedMeta } = useMemo(
        () =>
            metaList.reduce(
                // TODO: Move this to utility file
                (acc, meta) => {
                    const accClone = { ...acc };
                    const isContrastRatioMeta = getIsContrastRatioMeta(meta);

                    // TODO: Need to account for APCA threshold pass/fail scenarios
                    if (isContrastRatioMeta) {
                        accClone.contrastMeta.push(meta);
                    }

                    if (!isContrastRatioMeta) {
                        accClone.sanitizedMeta.push(meta);
                    }

                    return accClone;
                },
                {
                    contrastMeta: [],
                    sanitizedMeta: [],
                },
            ),
        [metaList],
    );

    return (
        <div className={cx(COLOR_BASE_CLS, modCls, contextCls)}>
            <div
                className={`${COLOR_BASE_CLS}__swatch-color`}
                style={swatchStyle}
            >
                {isCard && contrastMeta.length > 0 && (
                    <ColorSwatchMetaList metaList={contrastMeta} />
                )}
            </div>
            <div className={`${COLOR_BASE_CLS}__inner`} style={textStyle}>
                {!children && (
                    <>
                        <ColorSwatchDetails
                            mainContent={mainContent || sanitizedHex}
                            metaList={sanitizedMeta}
                        />
                        {!isCard && contrastMeta.length > 0 && (
                            <ColorSwatchMetaList metaList={contrastMeta} />
                        )}
                    </>
                )}
                {children}
            </div>
        </div>
    );
};

export default ColorSwatch;
