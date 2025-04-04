import {
    genDesignTokens,
    massageConstToDotNotation,
} from '@driponfleek/bankai-lib-theme-utils';

const getColorOnlyTokens = (tokens = {}) => {
    const tokenKeys = Object.keys(tokens);
    const colorTokens = [];

    for (let index = 0; index < tokenKeys.length; index += 1) {
        const data = {};
        const tokenKey = tokenKeys[index];

        if (tokenKey.indexOf('color') > -1) {
            data.token = tokenKey;
            data.color = tokens[tokenKey];
            colorTokens.push(data);
        }
    }

    return colorTokens;
};

export const genTokens = (fieldValues = {}) => {
    const {
        isDarkMode,
        shouldAutoCorrectForA11y,
        // shouldUseMinimumAPCATextCompliance,
        avatarSourceColorToken,
        badgeAffirmativeSourceColorToken,
        badgeCautionarySourceColorToken,
        badgeDangerSourceColorToken,
        badgeInfoSourceColorToken,
        bannerAffirmativeSourceColorToken,
        bannerCautionarySourceColorToken,
        bannerDangerSourceColorToken,
        bannerInfoSourceColorToken,
        buttonPrimarySourceColorToken,
        buttonPrimaryStyle,
        buttonPrimaryDestructiveSourceColorToken,
        buttonPrimaryDestructiveStyle,
        buttonSecondarySourceColorToken,
        buttonSecondaryStyle,
        buttonSecondaryDestructiveSourceColorToken,
        buttonSecondaryDestructiveStyle,
        calloutAffirmativeSourceColorToken,
        calloutCautionarySourceColorToken,
        calloutDangerSourceColorToken,
        calloutInfoSourceColorToken,
        ...fieldVals
    } = fieldValues;
    const presets = {};
    const fieldValKeys = Object.keys(fieldVals);

    for (let index = 0; index < fieldValKeys.length; index += 1) {
        const fieldValKey = fieldValKeys[index];
        const fieldVal = fieldVals[fieldValKey];

        presets[massageConstToDotNotation(fieldValKey)] = fieldVal;
    }

    const results = getColorOnlyTokens(
        genDesignTokens(presets, {
            isDarkMode,
            shouldAutoCorrectColors: shouldAutoCorrectForA11y,
            // shouldUseMinimumAPCATextCompliance,
            componentConfigs: {
                avatar: {
                    sourceColorToken: avatarSourceColorToken,
                },
                btnPrimary: {
                    style: buttonPrimaryStyle,
                    sourceColorToken: buttonPrimarySourceColorToken,
                },
                btnPrimaryDestructive: {
                    style: buttonPrimaryDestructiveStyle,
                    sourceColorToken: buttonPrimaryDestructiveSourceColorToken,
                },
                btnSecondary: {
                    style: buttonSecondaryStyle,
                    sourceColorToken: buttonSecondarySourceColorToken,
                },
                btnSecondaryDestructive: {
                    style: buttonSecondaryDestructiveStyle,
                    sourceColorToken:
                        buttonSecondaryDestructiveSourceColorToken,
                },
                badgeAffirmative: {
                    sourceColorToken: badgeAffirmativeSourceColorToken,
                },
                badgeCautionary: {
                    sourceColorToken: badgeCautionarySourceColorToken,
                },
                badgeDanger: {
                    sourceColorToken: badgeDangerSourceColorToken,
                },
                badgeInfo: {
                    sourceColorToken: badgeInfoSourceColorToken,
                },
                bannerAffirmative: {
                    sourceColorToken: bannerAffirmativeSourceColorToken,
                },
                bannerCautionary: {
                    sourceColorToken: bannerCautionarySourceColorToken,
                },
                bannerDanger: {
                    sourceColorToken: bannerDangerSourceColorToken,
                },
                bannerInfo: {
                    sourceColorToken: bannerInfoSourceColorToken,
                },
                calloutAffirmative: {
                    sourceColorToken: calloutAffirmativeSourceColorToken,
                },
                calloutCautionary: {
                    sourceColorToken: calloutCautionarySourceColorToken,
                },
                calloutDanger: {
                    sourceColorToken: calloutDangerSourceColorToken,
                },
                calloutInfo: {
                    sourceColorToken: calloutInfoSourceColorToken,
                },
            },
        }),
    );

    const resultKeys = Object.keys(results);

    for (let index = 0; index < resultKeys.length; index += 1) {
        const fieldValKey = resultKeys[index];
        const fieldVal = results[fieldValKey];

        if (
            fieldVal?.color?.includes(',') &&
            !fieldVal?.color?.includes('rgb')
        ) {
            fieldVal.color = `rgb(${fieldVal.color})`;
        }

        results[fieldValKey] = fieldVal;
    }

    return results;
};

// TODO: Docs
export const getTokensByCategory = (tokensData) => {
    // TODO: Move this to another file?
    const categorizedTokensData = {
        accordionTokens: [],
        avatarTokens: [],
        badgeTokens: [],
        badgeAffirmativeTokens: [],
        badgeCautionaryTokens: [],
        badgeDangerTokens: [],
        badgeInfoTokens: [],
        bannerTokens: [],
        bannerAffirmativeTokens: [],
        bannerCautionaryTokens: [],
        bannerDangerTokens: [],
        bannerInfoTokens: [],
        btnPrimaryTokens: [],
        btnPrimaryDestructiveTokens: [],
        btnSecondaryTokens: [],
        btnSecondaryDestructiveTokens: [],
        calloutAffirmativeTokens: [],
        calloutCautionaryTokens: [],
        calloutDangerTokens: [],
        calloutInfoTokens: [],
        dndDropzoneTokens: [],
        formMenuTokens: [],
        formToggleTokens: [],
        formToggleSwitchTokens: [],
        formTokens: [],
        linkTokens: [],
        loadingTokens: [],
        modalTokens: [],
        remainingTokens: [],
        semanticTokens: [],
        tabsTokens: [],
        toasterAffirmativeTokens: [],
        toasterCautionaryTokens: [],
        toasterErrorTokens: [],
        toasterInfoTokens: [],
        tooltipTokens: [],
    };

    for (let index = 0; index < tokensData.length; index += 1) {
        const tokenData = tokensData[index] ?? {};
        const { token = '' } = tokenData;

        switch (true) {
            case token.startsWith('accordion'):
                categorizedTokensData.accordionTokens.push(tokenData);
                break;
            case token.startsWith('avatar'):
                categorizedTokensData.avatarTokens.push(tokenData);
                break;
            case token.startsWith('badge.affirmative'):
                categorizedTokensData.badgeAffirmativeTokens.push(tokenData);
                break;
            case token.startsWith('badge.cautionary'):
                categorizedTokensData.badgeCautionaryTokens.push(tokenData);
                break;
            case token.startsWith('badge.danger'):
                categorizedTokensData.badgeDangerTokens.push(tokenData);
                break;
            case token.startsWith('badge.info'):
                categorizedTokensData.badgeInfoTokens.push(tokenData);
                break;
            case token.startsWith('badge'):
                categorizedTokensData.badgeTokens.push(tokenData);
                break;
            case token.startsWith('banner.affirmative'):
                categorizedTokensData.bannerAffirmativeTokens.push(tokenData);
                break;
            case token.startsWith('banner.cautionary'):
                categorizedTokensData.bannerCautionaryTokens.push(tokenData);
                break;
            case token.startsWith('banner.danger'):
                categorizedTokensData.bannerDangerTokens.push(tokenData);
                break;
            case token.startsWith('banner.info'):
                categorizedTokensData.bannerInfoTokens.push(tokenData);
                break;
            case token.startsWith('banner'):
                categorizedTokensData.bannerTokens.push(tokenData);
                break;
            case token.startsWith('button.primary.destructive') ||
                token.startsWith('button.split.primary.destructive'):
                categorizedTokensData.btnPrimaryDestructiveTokens.push(
                    tokenData,
                );
                break;
            case token.startsWith('button.primary') ||
                token.startsWith('button.split.primary'):
                categorizedTokensData.btnPrimaryTokens.push(tokenData);
                break;
            case token.startsWith('button.secondary.destructive') ||
                token.startsWith('button.split.secondary.destructive'):
                categorizedTokensData.btnSecondaryDestructiveTokens.push(
                    tokenData,
                );
                break;
            case token.startsWith('button.secondary') ||
                token.startsWith('button.split.secondary'):
                categorizedTokensData.btnSecondaryTokens.push(tokenData);
                break;
            case token.startsWith('callout.affirmative'):
                categorizedTokensData.calloutAffirmativeTokens.push(tokenData);
                break;
            case token.startsWith('callout.cautionary'):
                categorizedTokensData.calloutCautionaryTokens.push(tokenData);
                break;
            case token.startsWith('callout.danger'):
                categorizedTokensData.calloutDangerTokens.push(tokenData);
                break;
            case token.startsWith('callout.info'):
                categorizedTokensData.calloutInfoTokens.push(tokenData);
                break;
            case token.startsWith('dnd.'):
                categorizedTokensData.dndDropzoneTokens.push(tokenData);
                break;
            case token.startsWith('form.check'):
                categorizedTokensData.formToggleTokens.push(tokenData);
                break;
            case token.startsWith('form.menu'):
                categorizedTokensData.formMenuTokens.push(tokenData);
                break;
            case token.startsWith('form.toggle'):
                categorizedTokensData.formToggleSwitchTokens.push(tokenData);
                break;
            case token.startsWith('form'):
                categorizedTokensData.formTokens.push(tokenData);
                break;
            case token.startsWith('link'):
                categorizedTokensData.linkTokens.push(tokenData);
                break;
            case token.startsWith('loading'):
                categorizedTokensData.loadingTokens.push(tokenData);
                break;
            case token.startsWith('modal'):
                categorizedTokensData.modalTokens.push(tokenData);
                break;
            case token.startsWith('tabs'):
                categorizedTokensData.tabsTokens.push(tokenData);
                break;
            case token.startsWith('toaster.affirmative'):
                categorizedTokensData.toasterAffirmativeTokens.push(tokenData);
                break;
            case token.startsWith('toaster.cautionary'):
                categorizedTokensData.toasterCautionaryTokens.push(tokenData);
                break;
            case token.startsWith('toaster.error'):
                categorizedTokensData.toasterErrorTokens.push(tokenData);
                break;
            case token.startsWith('toaster.info'):
                categorizedTokensData.toasterInfoTokens.push(tokenData);
                break;
            case token.startsWith('tooltip'):
                categorizedTokensData.tooltipTokens.push(tokenData);
                break;
            case token.startsWith('semantic'):
                categorizedTokensData.semanticTokens.push(tokenData);
                break;

            default:
                categorizedTokensData.remainingTokens.push(tokenData);
                break;
        }
    }

    return categorizedTokensData;
};

export const getBtnTokensByState = (tokensData = []) => {
    const categorizedTokensData = {
        activeTokens: [],
        focusTokens: [],
        hoverTokens: [],
        restingTokens: [],
    };

    for (let i = 0; i < tokensData.length; i += 1) {
        const tokenData = tokensData[i] ?? {};
        const { token = '' } = tokenData;

        switch (true) {
            case token.includes('.active.'):
                categorizedTokensData.activeTokens.push(tokenData);
                break;
            case token.includes('.focus.'):
                categorizedTokensData.focusTokens.push(tokenData);
                break;
            case token.includes('.hover.'):
                categorizedTokensData.hoverTokens.push(tokenData);
                break;
            default:
                categorizedTokensData.restingTokens.push(tokenData);
                break;
        }
    }

    return categorizedTokensData;
};

export const getCompTheme = (tokensData = []) => {
    const theme = {};

    for (let i = 0; i < tokensData.length; i += 1) {
        const tokenData = tokensData[i] ?? {};
        const { token = '', color = '' } = tokenData;

        theme[token] = color;
    }

    return theme;
};
