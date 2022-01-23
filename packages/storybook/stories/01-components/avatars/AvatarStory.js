import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-avatars/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-avatars/README.md';
import Guide from './guides/AvatarGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/avatarArgs';

const { bankaiUI: locale } = strings;

const AvatarStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(AvatarStory, {
    storyName: locale.stories.components.avatars.avatar.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default AvatarStory;
