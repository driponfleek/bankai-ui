import { SplitButton, VARIANTS } from '@driponfleek/bankai-ui-buttons';
import StoryButtonDefault from './StoryButtonDefault';
import { args, argTypes } from './args/buttonArgs';
import { getLocale } from '../../../utils/localeUtils';

const { PRIMARY, SECONDARY } = VARIANTS;

export default {
    title: 'Components/Buttons',
    component: SplitButton,
    // tags: ['autodocs'],
    // args,
    // argTypes,
    // argTypes: {
    //     'aria-label': {
    //         description:
    //             'Use to provide text descriptions to assistive technology such as screen readers.',
    //     },
    //     text: {
    //         description: 'Text that will appear in side the button.',
    //     },
    //     type: {
    //         description:
    //             "Can be either 'submit' or 'button'. Defaults to 'button'.",
    //     },
    // },
};

// export { default as StoryButtonDefault } from './StoryButtonDefault';
// const name = strings.bankaiUI.stories.components.buttons.buttonDefault.title;
// console.log('name: ', name);
// export const DefaultBtn = {
//     // name: getLocale('stories.components.buttons.buttonDefault.title'),
//     name: 'Button (Default)',
//     render: (props) => <StoryButtonDefault {...props} />,
//     // argTypes: {
//     //     variant: {
//     //         control: false,
//     //         description:
//     //             'Used to change the button to a predefined variant. When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.',
//     //     },
//     // },
// };
// export const Primary = {
//     args: {
//         variant: PRIMARY,
//         text: 'Primary Button',
//     },
// };

// export const Secondary = {
//     args: {
//         variant: SECONDARY,
//         text: 'Secondary Button',
//     },
// };
