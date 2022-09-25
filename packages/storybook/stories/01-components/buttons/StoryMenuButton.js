import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-buttons/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-buttons/README.md';
import Guide from './guides/MenuButtonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/menuButtonArgs';

const { bankaiUI: locale } = strings;

const StoryMenuButton = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryMenuButton, {
    storyName: locale.stories.components.buttons.menuButton.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryMenuButton;
