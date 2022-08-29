import { VARIANTS as BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import { generateCSSVars } from '../cssVarUtils';
import { getAccordionTheme } from './accordionThemeUtils';
import { getAvatarTheme } from './avatarThemeUtils';
import {
    getBadgeAffirmativeTheme,
    getBadgeCautionaryTheme,
    getBadgeDefaultTheme,
    getBadgeErrorTheme,
    getBadgeInfoTheme,
    getBadgeStyle,
} from './badgeThemeUtils';
import { getBtnTheme, getBtnStyles } from './buttonThemeUtils';
import {
    getCoreColorsData,
    getCoreColorsTheme,
    getErrorTextColor,
} from './coreColorsThemeUtils';
import {
    getCalloutAffirmativeTheme,
    getCalloutBannerAffirmativeTheme,
    getCalloutBannerCautionaryTheme,
    getCalloutBannerDefaultTheme,
    getCalloutBannerErrorTheme,
    getCalloutBannerInfoTheme,
    getCalloutBannerStyle,
    getCalloutCautionaryTheme,
    getCalloutDefaultTheme,
    getCalloutErrorTheme,
    getCalloutInfoTheme,
} from './calloutThemeUtils';
import {
    getFormGeneralTheme,
    getFormCheckedAccentColorTheme,
    getFormErrorsTheme,
    getFormDnDFileUploaderTheme,
    getFormFocusColorTheme,
    getFormStyles,
    getFormMenuTheme,
    getFormMultiselectTheme,
    getFormToggleSwitchTheme,
} from './formThemeUtils';
import { getLinkStyle, getLinkTheme } from './linkThemeUtils';
import { getLoadingTheme } from './loadingThemeUtils';
import { getModalStyles, getModalTheme } from './modalThemeUtils';
import { getSectionStyles } from './sectionThemeUtils';
import { getTabsTheme } from './tabThemeUtils';
import {
    getToasterAffirmativeTheme,
    getToasterCautionaryTheme,
    getToasterErrorTheme,
    getToasterInfoTheme,
    getToasterStyles,
    getToasterTheme,
} from './toasterThemeUtils';
import { getTypographyTheme } from './styleTokensThemeUtils';
import { BTN_STYLES } from '../../const/btnStylesConst';
import { getComponentSourceColor } from '../dataUtils';

const { GHOST, FLAT } = BTN_STYLES;

export const getThemeTokens = (data = {}, config = {}) => {
    const {
        isDarkMode = false,
        shouldAutoCorrectColors = true,
        // isRoundedUI = true,
        isMobile = false,
        shouldUnderlineLink = false,
        componentOverrides,
        primaryBtnStyle = FLAT,
        primaryDestructiveBtnStyle = FLAT,
        secondaryBtnStyle = GHOST,
        secondaryDestructiveBtnStyle = GHOST,
    } = config;
    const {
        accentColors,
        affirmativeColors,
        canvasAltColors = {},
        canvasColors = {},
        cautionaryColors,
        destructiveColors,
        errorColors,
        infoColors,
        neutral50Color,
        neutral80Color,
        primaryColors,
        secondaryColors,
        textColor,
        textAltColor,
        // universalBorderAccessibleColor,
        universalBorderDecorativeColor,
        universalHoverColor,
    } = getCoreColorsData(data, { isDarkMode, isMobile });
    const typographyTokens = getTypographyTheme(data, { isMobile });
    const canvasAltColor = canvasAltColors.base;
    const canvasColor = canvasColors.base;
    const canvases = {
        canvasAltColor,
        canvasColor,
    };

    return {
        ...getCoreColorsTheme(data, { isDarkMode, isMobile }),
        ...getErrorTextColor(
            {
                sourceColors: errorColors,
            },
            { shouldAutoCorrectColors },
        ),
        ...getAccordionTheme(
            {
                canvasColor,
                universalHoverColor,
                borderColor: universalBorderDecorativeColor,
            },
            { isMobile },
        ),
        ...getAvatarTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: accentColors,
                    overrideHex: componentOverrides?.avatarSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getBadgeStyle(data),
        ...getBadgeAffirmativeTheme({
            sourceColors: getComponentSourceColor({
                ...canvases,
                fallback: affirmativeColors,
                overrideHex: componentOverrides?.badgeAffirmativeSourceColor,
            }),
        }),
        ...getBadgeCautionaryTheme({
            sourceColors: getComponentSourceColor({
                ...canvases,
                fallback: cautionaryColors,
                overrideHex: componentOverrides?.badgeCautionarySourceColor,
            }),
        }),
        ...getBadgeDefaultTheme({
            sourceColors: getComponentSourceColor({
                ...canvases,
                fallback: canvasAltColor,
                overrideHex: componentOverrides?.badgeDefaultSourceColor,
            }),
        }),
        ...getBadgeErrorTheme({
            sourceColors: getComponentSourceColor({
                ...canvases,
                fallback: errorColors,
                overrideHex: componentOverrides?.badgeErrorSourceColor,
            }),
        }),
        ...getBadgeInfoTheme({
            sourceColors: getComponentSourceColor({
                ...canvases,
                fallback: infoColors,
                overrideHex: componentOverrides?.badgeInfoSourceColor,
            }),
        }),
        ...getBtnStyles(data),
        ...getBtnTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: primaryColors,
                    overrideHex: componentOverrides?.btnPrimarySourceColor,
                }),
            },
            {
                shouldAutoCorrectColors,
                btnStyle: primaryBtnStyle,
                VARIANT: BTN_VARIANTS.PRIMARY,
                isMobile,
            },
        ),
        ...getBtnTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: destructiveColors,
                    overrideHex:
                        componentOverrides?.btnPrimaryDestructiveSourceColor,
                }),
                canvasColor,
            },
            {
                shouldAutoCorrectColors,
                btnStyle: primaryDestructiveBtnStyle,
                VARIANT: BTN_VARIANTS.PRIMARY_DESTRUCTIVE,
                isMobile,
            },
        ),
        ...getBtnTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: secondaryColors,
                    overrideHex: componentOverrides?.btnSecondarySourceColor,
                }),
                canvasColor,
            },
            {
                btnStyle: secondaryBtnStyle,
                VARIANT: BTN_VARIANTS.SECONDARY,
                isDarkMode,
                isMobile,
                shouldAutoCorrectColors,
            },
        ),
        ...getBtnTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: destructiveColors,
                    overrideHex:
                        componentOverrides?.btnSecondaryDestructiveSourceColor,
                }),
                canvasColor,
            },
            {
                btnStyle: secondaryDestructiveBtnStyle,
                VARIANT: BTN_VARIANTS.SECONDARY_DESTRUCTIVE,
                isDarkMode,
                isMobile,
                shouldAutoCorrectColors,
            },
        ),
        ...getCalloutBannerStyle(data),
        ...getCalloutAffirmativeTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: affirmativeColors,
                    overrideHex:
                        componentOverrides?.calloutAffirmativeSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutCautionaryTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: cautionaryColors,
                    overrideHex:
                        componentOverrides?.calloutCautionarySourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutDefaultTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: {
                        ...textAltColor,
                        recommendedNonTextColor: textAltColor,
                    },
                    overrideHex: componentOverrides?.calloutDefaultSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutErrorTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: errorColors,
                    overrideHex: componentOverrides?.calloutErrorSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutInfoTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: infoColors,
                    overrideHex: componentOverrides?.calloutInfoSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutBannerAffirmativeTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: affirmativeColors,
                    overrideHex:
                        componentOverrides?.calloutAffirmativeSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutBannerCautionaryTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: cautionaryColors,
                    overrideHex:
                        componentOverrides?.calloutCautionarySourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutBannerDefaultTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: { ...neutral80Color, variants: [neutral80Color] },
                    overrideHex: componentOverrides?.calloutDefaultSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutBannerErrorTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: errorColors,
                    overrideHex: componentOverrides?.calloutErrorSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getCalloutBannerInfoTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: infoColors,
                    overrideHex: componentOverrides?.calloutInfoSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getFormStyles(data),
        ...getFormGeneralTheme({ canvasColors }, { isDarkMode }),
        ...getFormCheckedAccentColorTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: primaryColors,
                    overrideHex:
                        componentOverrides?.formCheckedAccentSourceColor,
                }),
            },
            { isMobile, shouldAutoCorrectColors },
        ),
        ...(!isMobile &&
            getFormDnDFileUploaderTheme(
                {
                    affirmativeColors: getComponentSourceColor({
                        ...canvases,
                        fallback: affirmativeColors,
                        overrideHex:
                            componentOverrides?.dndFileUploaderAffirmativeSourceColor,
                    }),
                    errorColors: getComponentSourceColor({
                        ...canvases,
                        fallback: errorColors,
                        overrideHex:
                            componentOverrides?.dndFileUploaderErrorSourceColor,
                    }),
                    ...canvases,
                },
                { isDarkMode, shouldAutoCorrectColors },
            )),
        ...getFormErrorsTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: errorColors,
                    overrideHex: componentOverrides?.formErrorsSourceColor,
                }),
            },
            { isDarkMode, isMobile },
        ),
        ...getFormFocusColorTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: primaryColors,
                    overrideHex: componentOverrides?.formFocusSourceColor,
                }),
            },
            { shouldAutoCorrectColors, isMobile },
        ),
        ...getFormMenuTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: primaryColors,
                    overrideHex: componentOverrides?.formMenuSourceColor,
                }),
            },
            { shouldAutoCorrectColors, isMobile, isDarkMode },
        ),
        ...getFormMultiselectTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: primaryColors,
                    overrideHex: componentOverrides?.formMultiselectSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getFormToggleSwitchTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: affirmativeColors,
                    overrideHex:
                        componentOverrides?.formToggleSwitchSourceColor,
                }),
                neutralColor: neutral50Color,
                ...canvases,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getLinkStyle(data),
        ...getLinkTheme(
            data,
            { ...canvases, textColor },
            {
                isDarkMode,
                isMobile,
                shouldAutoCorrectColors,
                shouldUnderlineLink,
            },
        ),
        ...getLoadingTheme(
            {
                accentColors: getComponentSourceColor({
                    ...canvases,
                    fallback: accentColors,
                    overrideHex: componentOverrides?.loadingAccentSourceColor,
                }),
                primaryColors: getComponentSourceColor({
                    ...canvases,
                    fallback: primaryColors,
                    overrideHex: componentOverrides?.loadingPrimarySourceColor,
                }),
                secondaryColors: getComponentSourceColor({
                    ...canvases,
                    fallback: secondaryColors,
                    overrideHex:
                        componentOverrides?.loadingSecondarySourceColor,
                }),
                ...canvases,
            },
            { shouldAutoCorrectColors, isDarkMode },
        ),
        ...getModalStyles(data),
        ...getModalTheme({ isMobile }),
        ...getSectionStyles(data),
        ...getTabsTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: primaryColors,
                    overrideHex: componentOverrides?.tabsSourceColor,
                }),
                canvasAltColors,
                canvasColors,
                borderColor: universalBorderDecorativeColor,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getToasterStyles(data),
        ...getToasterTheme({
            sourceColors: canvasColors,
        }),
        ...getToasterAffirmativeTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: affirmativeColors,
                    overrideHex:
                        componentOverrides?.toasterAffirmativeSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getToasterCautionaryTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: cautionaryColors,
                    overrideHex:
                        componentOverrides?.toasterCautionarySourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getToasterErrorTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: errorColors,
                    overrideHex: componentOverrides?.toasterErrorSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...getToasterInfoTheme(
            {
                sourceColors: getComponentSourceColor({
                    ...canvases,
                    fallback: infoColors,
                    overrideHex: componentOverrides?.toasterInfoSourceColor,
                }),
            },
            { shouldAutoCorrectColors },
        ),
        ...typographyTokens,
    };
};

export const getThemeCSS = (themeData, config = {}) => {
    const { cssSelector = ':root', ...rest } = config;

    return generateCSSVars(getThemeTokens(themeData, { ...rest }), cssSelector);
};
