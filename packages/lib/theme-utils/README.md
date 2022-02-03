# @epr0t0type/bankai-lib-theme-utils
Utilities for dealing with color.

## Installing
```
yarn add @epr0t0type/bankai-lib-theme-utils
```

## Usage

### Light/Dark Theme
```
import { bankaiLightTheme, bankaiDarkTheme } from '@epr0t0type/bankai-lib-theme-utils';
```

### Constants
```
import {
    DARK_THEME_TOKEN_DEFAULTS,
    LIGHT_THEME_TOKEN_DEFAULTS,
    COLOR_TOKEN_NAMES,
    SPEC_TOKEN_NAMES,
    SPEC_TOKEN_DEFAULTS,
    THEME_TOKEN_NAMES,
} from '@epr0t0type/bankai-lib-theme-utils';
```

### Utils
```
import {
    getCommonColorCompatabilities,
    getJuxtaposedColorAgainstCanvases,
    getCorrectedLightnessAdjustment,
    getTextColor,
    getThemeDefaults,
    getFocusHaloRGBA,
    getThemeCSSVarFromAPIKey,
    generateCSSVars,
    getThemeAPIKeyFromName,
    getNameFromThemeAPIKey,
    getThemeAPIKeysFromNames,
    mapThemeAPIKeysToDefaults,
    formatThemeBorderRadiusValsForWeb,
    formatFontSizeValsForWeb,
    formatThemeColorValuesForWeb,
    formatSpecValuesForWeb,
    formatThemeDataForWeb,
    getAccordionTheme,
    getAvatarTheme,
    getBadgeAffirmativeTheme,
    getBadgeCautionaryTheme,
    getBadgeErrorTheme,
    getBadgeInfoTheme,
    getBadgeDefaultTheme,
    getBtnSecondaryTheme,
    getBtnPrimaryTheme,
    getCalloutMemoAffirmativeTheme,
    getCalloutMemoCautionaryTheme,
    getCalloutMemoErrorTheme,
    getCalloutMemoInfoTheme,
    getCalloutTheme,
    getCoreColorsData,
    getCoreColorsTheme,
    getFormToggleSwitchTheme,
    getFormDnDFileUploaderTheme,
    getFormErrorsTheme,
    getFormGeneralTheme,
    getFormPrimaryColorTheme,
    getLinkTheme,
    getLoadingTheme,
    getModalTheme,
    getTypographyTheme,
    getBorderRadiusTheme,
    getSpecTheme,
    getTabsTheme,
    getToasterColors,
    getToasterAffirmativeTheme,
    getToasterCautionaryTheme,
    getToasterErrorTheme,
    getToasterInfoTheme,
    getToasterTheme,
    getThemeTokens,
    getThemeCSS,
} from '@epr0t0type/bankai-lib-theme-utils';
```

### SASS
```
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/fonts.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/index.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/mixins/states.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/mixins/typography.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/resets/document.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/resets/normailize.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/tokens/color-dark-theme-tokens.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/tokens/color-light-theme-tokens.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/tokens/color-neutral-tokens.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/tokens/dark-theme-tokens.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/tokens/light-theme-tokens.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/tokens/spec-tokens.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/tokens/typography-ratio-design-tokens.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/utils/theme-utils.scss';
@import '~@epr0t0type/bankai-lib-theme-utils/src/styles/utils/typography-utils.scss';
```

## Built With
* [normalize.css](https://github.com/necolas/normalize.css)

## License
[MIT](../../../LICENSE)
