import {
    Button,
    ButtonPrimary,
    ButtonSecondary,
    MenuButton,
    MenuButtonPrimary,
    MenuButtonSecondary,
    SplitButton,
    SplitButtonPrimary,
    SplitButtonSecondary,
} from '@driponfleek/bankai-ui-buttons';

// Constants
import { BUTTON_VARIANTS } from '../const/storyConst';

const { PRIMARY, SECONDARY } = BUTTON_VARIANTS;

export const getBtnStoryPlaygroundComp = (VARIANT) => {
    switch (VARIANT) {
        case PRIMARY:
            return ButtonPrimary;
        case SECONDARY:
            return ButtonSecondary;
        default:
            return Button;
    }
};

export const getMenuBtnStoryPlaygroundComp = (VARIANT) => {
    switch (VARIANT) {
        case PRIMARY:
            return MenuButtonPrimary;
        case SECONDARY:
            return MenuButtonSecondary;
        default:
            return MenuButton;
    }
};

export const getSplitBtnStoryPlaygroundComp = (VARIANT) => {
    switch (VARIANT) {
        case PRIMARY:
            return SplitButtonPrimary;
        case SECONDARY:
            return SplitButtonSecondary;
        default:
            return SplitButton;
    }
};

export const getRenderIconCodeStrModifier = (
    codeStr,
) => `import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import { BankaiCirclePlus } from '@driponfleek/bankai-ui-icons';

${codeStr.replace(
    /renderIcon=\{\(\) => \{\}\}/g,
    'renderIcon={BankaiCirclePlus}',
)}`;

export const getRenderCustomContentCodeStrModifier = (codeStr) =>
    `import { ButtonSecondary, ButtonText, ButtonIcon } from '@driponfleek/bankai-ui-buttons';

${codeStr.replace(
    /renderIcon=\{\(\) => \{\}\}/g,
    'renderIcon={BankaiChevronRight}',
)}`;

export const getBusyIconCodeStrModifier = (
    codeStr,
) => `import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import { BankaiCircleDash } from '@driponfleek/bankai-ui-icons';

const renderBusyIcon = () => (
    <BankaiCircleDash contextCls="bankai-icon-spinner" />
);

${codeStr.replace(
    /renderBusyIcon=\{\(\) => \{\}\}/g,
    'renderBusyIcon={renderBusyIcon}',
)}}`;

export const getDynamicTextCodeStrModifier = (codeStr) =>
    `import { BankaiCircleDash, BankaiCirclePlus } from '@driponfleek/bankai-ui-icons';

const [isBusy, setIsBusy] = useState(false);
const text = isBusy ? 'Busy Doing Stuff' : 'Button Text';
const renderBusyIcon = () => (
    <BankaiCircleDash contextCls="bankai-icon-spinner" />
);

${codeStr
    .replace(/onClick=\{\(\) => \{\}\}/g, 'onClick={handleClick}')
    .replace(/text="(Button Text|Busy Doing Stuff)"/g, 'text={text}')
    .replace(/renderIcon=\{\(\) => \{\}\}/g, 'renderIcon={BankaiCirclePlus}')
    .replace(
        /renderBusyIcon=\{\(\) => \{\}\}/g,
        'renderBusyIcon={renderBusyIcon}',
    )}`;
