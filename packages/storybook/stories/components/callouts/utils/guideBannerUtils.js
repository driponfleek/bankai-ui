// import {
//     Button,
//     SplitButton,
//     LinkButton,
// } from '@driponfleek/bankai-ui-buttons';

// // Constants
// import { BUTTONS } from '../const/storyConst';

// const { LINK_BUTTON, SPLIT_BUTTON } = BUTTONS;

// export const getGuidePlaygroundComp = (compName) => {
//     switch (compName) {
//         case LINK_BUTTON:
//             return LinkButton;
//         case SPLIT_BUTTON:
//             return SplitButton;
//         default:
//             return Button;
//     }
// };

// export const getDynamicTextCodeStrModifier = (codeStr) =>
//     `const [isBusy, setIsBusy] = useState(false);
// const text = isBusy ? 'Busy Doing Stuff' : 'Button Text';\n\n${codeStr
//         .replace(/onClick=\{\(\) => \{\}\}/g, 'onClick={handleClick}')
//         .replace(/text="(Button Text|Busy Doing Stuff)"/g, 'text={text}')}`;
