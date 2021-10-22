import React from 'react';
import Guide from './guides/BadgeGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/badgeArgs';

const { bankaiUI: locale } = strings;

const BadgeStory = (props) => <Guide {...props} />;

storyConfig(BadgeStory, {
    storyName: locale.stories.components.badges.badge.title,
    args,
    argTypes,
});

export default BadgeStory;
