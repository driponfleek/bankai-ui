import { Avatar as BankaiAvatar } from '@driponfleek/bankai-ui-avatars';
import StoryAvatar from './StoryAvatar';
import { argTypes, args } from './args/avatarArgs';

export default {
    title: 'Components/Avatars',
    component: BankaiAvatar,
    argTypes,
    args,
};

export const Avatar = {
    name: 'Avatar',
    render: StoryAvatar,
    component: BankaiAvatar,
};
