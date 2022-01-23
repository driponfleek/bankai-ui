import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-badges/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-badges/README.md';
import Guide from './guides/BadgeGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/badgeArgs';

const { bankaiUI: locale } = strings;

const BadgeStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(BadgeStory, {
    storyName: locale.stories.components.badges.badge.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default BadgeStory;
