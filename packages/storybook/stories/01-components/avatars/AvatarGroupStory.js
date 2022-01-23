import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-avatars/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-avatars/README.md';
import Guide from './guides/AvatarGroupGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/avatarGroupArgs';

const { bankaiUI: locale } = strings;

const AvatarGroupStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(AvatarGroupStory, {
    storyName: locale.stories.components.avatars.avatarGroup.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default AvatarGroupStory;
