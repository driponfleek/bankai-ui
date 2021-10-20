import React from 'react';
import Guide from './guides/AvatarGroupGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/avatarGroupArgs';

const { bankaiUI: locale } = strings;

const AvatarGroupStory = (props) => <Guide {...props} />;

storyConfig(AvatarGroupStory, {
    storyName: locale.stories.components.avatars.avatarGroup.title,
    args,
    argTypes,
});

export default AvatarGroupStory;
