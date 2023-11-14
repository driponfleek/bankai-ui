import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import StoryLinkButton from './StoryLinkButton';

export default {
    title: 'Components/Buttons',
    component: LinkButton,
    args: {
        text: 'Link Text',
    },
};

export const ButtonLink = {
    name: 'Link Button',
    render: StoryLinkButton,
};
