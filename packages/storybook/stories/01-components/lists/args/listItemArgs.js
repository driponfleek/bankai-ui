import { stringArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    text: 'List Item Text',
    meta: 'Meta text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim viverra sapien eu venenatis. Curabitur sit amet malesuada quam, eu iaculis mi.',
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        description: 'Text displayed inside the List Item.',
        propName: 'text',
    }),
    ...stringArg({
        description:
            'Additional secondary text displayed inside the List Item. Used to provide additional information and should be used as supportive information to `props.text`.',
        propName: 'meta',
    }),
};
