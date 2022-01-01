/* eslint-disable import/prefer-default-export */
import { generateCSSVars } from '../cssVarUtils';
import { getAvatarTheme } from './avatarThemeUtils';
import { getBtnPrimaryTheme, getBtnSecondaryTheme } from './buttonThemeUtils';
import { getLinkTheme } from './linkThemeUtils';
import { getCoreColorsData, getCoreColorsTheme } from './coreColorsThemeUtils';
import { getAccordionTheme } from './accordionThemeUtils';
import {
    getCalloutMemoAffirmativeTheme,
    getCalloutMemoCautionaryTheme,
    getCalloutMemoErrorTheme,
    getCalloutMemoInfoTheme,
    getCalloutTheme,
} from './calloutThemeUtils';
import {
    getBadgeAffirmativeTheme,
    getBadgeCautionaryTheme,
    getBadgeErrorTheme,
    getBadgeInfoTheme,
    getBadgeDefaultTheme,
} from './badgeThemeUtils';
import {
    getFormGeneralTheme,
    getFormErrorsTheme,
    getFormToggleSwitchTheme,
    getFormPrimaryColorTheme,
    getFormDnDFileUploaderTheme,
} from './formThemeUtils';
import { getSpecTheme } from './specThemeUtils';
import { getLoadingTheme } from './loadingThemeUtils';
import { getModalTheme } from './modalThemeUtils';
import { getTabsTheme } from './tabThemeUtils';
import {
    getToasterAffirmativeTheme,
    getToasterCautionaryTheme,
    getToasterErrorTheme,
    getToasterInfoTheme,
    getToasterTheme,
} from './toasterThemeUtils';

export const getThemeTokens = (data = {}, config = {}) => {
    const {
        isDarkMode = false,
        shouldAutoCorrectColors = true,
        isRoundedUI = true,
    } = config;
    const coreColors = getCoreColorsData(data, isDarkMode);
    const {
        accentColorData,
        affirmativeColorData,
        canvasAltColorData = {},
        canvasColorData = {},
        cautionaryColorData,
        destructiveColorData,
        errorColorData,
        infoColorData,
        linkColorData,
        primaryColorData,
        secondaryColorData,
        textColor,
        textAltColor,
        universalBorderColor,
        universalHoverColor,
    } = coreColors;

    return {
        ...getCoreColorsTheme(data, { isDarkMode }),
        ...getAccordionTheme({
            canvasColor: canvasColorData.base,
            universalHoverColor,
            universalBorderColor,
        }),
        ...getAvatarTheme(accentColorData),
        ...getBadgeDefaultTheme(canvasColorData.base, { isDarkMode }),
        ...getBadgeAffirmativeTheme(affirmativeColorData),
        ...getBadgeCautionaryTheme(cautionaryColorData),
        ...getBadgeErrorTheme(errorColorData),
        ...getBadgeInfoTheme(infoColorData),
        ...getBtnPrimaryTheme(
            {
                sourceColorData: primaryColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
            },
            { shouldAutoCorrectColors },
        ),
        ...getBtnPrimaryTheme(
            {
                sourceColorData: destructiveColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
            },
            { shouldAutoCorrectColors, isDestructive: true },
        ),
        ...getBtnSecondaryTheme(
            {
                sourceColorData: secondaryColorData,
                defaultBtnBGColor: canvasColorData.base,
            },
            {
                isDarkMode,
                shouldAutoCorrectColors,
            },
        ),
        ...getBtnSecondaryTheme(
            {
                sourceColorData: destructiveColorData,
                defaultBtnBGColor: canvasColorData.base,
            },
            {
                isDarkMode,
                shouldAutoCorrectColors,
                isDestructive: true,
            },
        ),
        ...getCalloutMemoAffirmativeTheme(affirmativeColorData),
        ...getCalloutMemoCautionaryTheme(cautionaryColorData),
        ...getCalloutMemoErrorTheme(errorColorData),
        ...getCalloutMemoInfoTheme(infoColorData),
        ...getCalloutTheme(
            {
                errorColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
                textAltColor,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getFormGeneralTheme(canvasColorData, { isDarkMode }),
        ...getFormErrorsTheme(
            {
                sourceColorData: errorColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getFormToggleSwitchTheme(
            {
                sourceColorData: affirmativeColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getFormPrimaryColorTheme(
            {
                sourceColorData: primaryColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getFormDnDFileUploaderTheme(
            {
                affirmativeColorData,
                errorColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getLinkTheme(
            {
                sourceColorData: linkColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
                textColor,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getLoadingTheme(
            {
                primaryColorData,
                secondaryColorData,
                accentColorData,
                canvasColor: canvasColorData.base,
                canvasAltColor: canvasAltColorData.base,
            },
            { shouldAutoCorrectColors, isDarkMode },
        ),
        ...getModalTheme(),
        ...getTabsTheme(
            {
                primaryColorData,
                canvasColorData,
                canvasAltColorData,
                universalBorderColor,
            },
            { isDarkMode, shouldAutoCorrectColors },
        ),
        ...getToasterTheme(canvasColorData),
        ...getToasterAffirmativeTheme(affirmativeColorData),
        ...getToasterCautionaryTheme(cautionaryColorData),
        ...getToasterErrorTheme(errorColorData),
        ...getToasterInfoTheme(infoColorData),
        ...getSpecTheme(data, isRoundedUI),
    };
};

export const getThemeCSS = (themeData, config = {}) => {
    const { cssSelector = ':root', ...rest } = config;

    return generateCSSVars(getThemeTokens(themeData, { ...rest }), cssSelector);
};
