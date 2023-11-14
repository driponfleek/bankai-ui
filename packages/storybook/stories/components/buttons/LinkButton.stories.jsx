import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import StoryLinkButton from './StoryLinkButton';
// import { args, argTypes } from './args/buttonArgs';
// import { getLocale } from '../../../utils/localeUtils';

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
