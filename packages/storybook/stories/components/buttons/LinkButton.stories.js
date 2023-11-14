import { LinkButton as BankaiLinkButton } from '@driponfleek/bankai-ui-buttons';
import StoryLinkButton from './StoryLinkButton';

export default {
    title: 'Components/Buttons',
    component: BankaiLinkButton,
    args: {
        text: 'Link Text',
    },
};

export const LinkButton = {
    name: 'Link Button',
    render: StoryLinkButton,
};
