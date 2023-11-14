import {
    Button,
    MenuButton,
    LinkButton,
    SplitButton,
} from '@driponfleek/bankai-ui-buttons';

// Constants
import { BUTTONS } from '../const/storyConst';

const { LINK_BUTTON, MENU_BUTTON, SPLIT_BUTTON } = BUTTONS;

export const getGuidePlaygroundComp = (compName) => {
    switch (compName) {
        case LINK_BUTTON:
            return LinkButton;
        case MENU_BUTTON:
            return MenuButton;
        case SPLIT_BUTTON:
            return SplitButton;
        default:
            return Button;
    }
};

export const getRenderIconCodeStrModifier = (
    codeStr,
) => `import { BankaiCirclePlus } from '@driponfleek/bankai-ui-icons';

${codeStr.replace(
    /renderIcon=\{\(\) => \{\}\}/g,
    'renderIcon={BankaiCirclePlus}',
)}`;

export const getRenderCustomContentCodeStrModifier = (codeStr) =>
    `${codeStr.replace(
        /renderIcon=\{\(\) => \{\}\}/g,
        'renderIcon={BankaiChevronRight}',
    )}`;

export const getBusyIconCodeStrModifier = (
    codeStr,
) => `import { BankaiCircleDash } from '@driponfleek/bankai-ui-icons';

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
