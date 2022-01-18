import React from 'react';
import Guide from './guides/AvatarGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/avatarArgs';

const { bankaiUI: locale } = strings;

const AvatarStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(AvatarStory, {
    storyName: locale.stories.components.avatars.avatar.title,
    args,
    argTypes,
});

export default AvatarStory;
