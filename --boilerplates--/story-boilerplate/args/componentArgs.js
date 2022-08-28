// import { VARIANTS } from '@epr0t0type/bankai-ui-buttons';
// import {
//     stringArg,
//     boolArg,
//     selectArg,
//     objectArg,
//     funcArg,
// } from '../../../../utils/argTypesUtils';

// // Locale
// import { getLocale } from '../../../../utils/localeUtils';

// // Reference:
// // https://storybook.js.org/docs/react/essentials/controls
// // https://storybook.js.org/docs/react/essentials/actions
// // https://storybook.js.org/docs/react/api/argtypes

// const { bankaiUI: locale } = strings;

// export const args = {
//     text: 'Button Text',
//     type: 'button',
//     isBusy: false,
//     isDisabled: false,
// };

// export const argTypes = {
//     ...stringArg({
//         description: getLocale('shared.propDesc.contextCls'),
//         propName: 'contextCls',
//     }),
//     ...stringArg({
//         description: 'Text displayed inside the button.',
//         propName: 'text',
//     }),
//     ...selectArg({
//         description: getLocale('shared.propDesc.variant'),
//         options: Object.keys(VARIANTS).map((VARIANT) => VARIANTS[VARIANT]),
//         propName: 'variant',
//     }),
//     ...boolArg({
//         defaultValue: 'false',
//         description: getLocale('shared.propDesc.isDisabled'),
//         propName: 'isDisabled',
//     }),
//     ...objectArg({
//         description:
//             'Can be used to pass data back to an `onClick` handler when the user clicks on the button.',
//         propName: 'data',
//     }),
//     ...funcArg({
//         action: 'clicked',
//         defaultValue: '() => Promise.resolve()',
//         description: 'Handler called when the user clicks on the button.',
//         propName: 'onClick',
//     }),
//     ...funcArg({
//         description: `${locale.shared.propDesc.renderIcon} ${locale.shared.propDesc.requiresBankaiIcons}`,
//         propName: 'renderIcon',
//     }),
//     ...funcArg({
//         description:
//             'Render function for overriding the default busy icon with a custom one.',
//         propName: 'renderBusyIcon',
//     }),
// };
