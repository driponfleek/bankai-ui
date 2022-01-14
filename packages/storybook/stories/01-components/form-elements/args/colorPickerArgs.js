import {
    stringArg,
    boolArg,
    funcArg,
    numberArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    changeCompleteThreshold: 200,
    hasAlpha: false,
    // onChange: () => Promise.resolve(),
    // onChangeComplete: () => Promise.resolve(),
};

export const argTypes = {
    ...stringArg({
        description:
            'Use to set the color. Can be either hex (`#rgb` or `#rrggbb`) or rgb string (`rgb(0, 0, 0)`). If providing a value with rgba string (`rgba(0, 0, 0, 0.5)`), make sure to set `props.hasAlpha` to true to show UI for setting alpha value.',
        propName: 'color',
    }),
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...numberArg({
        defaultValue: 200,
        description:
            'Modify the delay for props.onChangeComplete to be called.',
        propName: 'changeCompleteThreshold',
    }),
    ...boolArg({
        defaultValue: 'false',
        description:
            'For use with RGBA color formats. Exposes UI for setting the alpha transparency of a color.',
        propName: 'hasAlpha',
    }),
    ...funcArg({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        description:
            'Handler called when the user interacts with the component. Returns hex format when `props.hasAlpha = false` and rgba string when `props.hasAlpha = true.',
        propName: 'onChange',
    }),
    ...funcArg({
        action: 'change complete',
        defaultValue: '() => Promise.resolve()',
        description:
            'Handler called once user has stopped interacting with the color picker for 200ms. Use this when you want to limit change events for performance and usability reasons. Returns hex format when `props.hasAlpha = false` and rgba string when `props.hasAlpha = true.',
        propName: 'onChangeComplete',
    }),
};
