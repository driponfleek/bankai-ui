import { args as cpArgs } from './colorPickerArgs';
import {
    stringArg,
    boolArg,
    funcArg,
    numberArg,
    shapeArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    ...cpArgs,
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    shouldAlignPickerToRightEdge: false,
    shouldOpenUp: false,
    triggerProps: {
        'aria-label': 'Color Picker Toggle',
    },
    // onChange: () => Promise.resolve(),
    // onChangeComplete: () => Promise.resolve(),
};

export const argTypes = {
    ...stringArg({
        description:
            'Use to set the color. Can be either hex (`#rgb` or `#rrggbb`) or hex with alpha (`#rgba` or `#rrggbbaa`) when `props.hasAlpha` is true.',
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
        propName: 'contextCls',
    }),
    ...boolArg({
        defaultValue: 'false',
        description:
            'For use with RGBA color formats. Exposes UI for setting the alpha transparency of a color.',
        propName: 'hasAlpha',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'hasError',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isDisabled',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isReadOnly',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldAlignPickerToRightEdge',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldOpenUp',
    }),
    ...shapeArg({
        defaultValue: '{}',
        description:
            'Props to be passed to the HTML button element. It is recommended to provide an `aria-label` here to describe the trigger if using the default one provided or rendering non-text custom content for the trigger via `props.renderTriggerContent`.',
        propName: 'triggerProps',
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
    ...funcArg({
        description:
            'Use to render your own Color Picker. When using this, it is up to you to handle the updating of the text input value.',
        propName: 'renderColorPicker',
    }),
    ...funcArg({
        description:
            'This prop can be used to show something other than the default UI which displays the selected color swatch in the trigger.',
        propName: 'renderTriggerContent',
    }),
};
