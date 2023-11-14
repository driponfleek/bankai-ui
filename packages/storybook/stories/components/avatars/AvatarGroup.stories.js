import { AvatarGroup as BankaiAvatarGroup } from '@driponfleek/bankai-ui-avatars';
import StoryAvatarGroup from './StoryAvatarGroup';
import { argTypes, args } from './args/avatarGroupArgs';

export default {
    title: 'Components/Avatars',
    component: BankaiAvatarGroup,
    argTypes,
    args,
};

export const AvatarGroup = {
    name: 'Avatar Group',
    render: StoryAvatarGroup,
    component: BankaiAvatarGroup,
};
