import { Hyperlink as BankaiHyperlink } from '@driponfleek/bankai-ui-navigation';
import StoryHyperlink from './StoryHyperlink';

export default {
    title: 'Components/Navigation',
    component: BankaiHyperlink,
    args: {
        // eslint-disable-next-line no-script-url
        href: 'javascript: void(0)',
        shouldOpenInNewWindow: false,
    },
    argTypes: {
        href: {
            control: false,
        },
    },
};

export const Hyperlink = {
    name: 'Hyperlink',
    render: StoryHyperlink,
    component: BankaiHyperlink,
};
