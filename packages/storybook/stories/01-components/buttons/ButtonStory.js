import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-buttons/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-buttons/README.md';
import Guide from './guides/ButtonGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/buttonArgs';

const { bankaiUI: locale } = strings;

const ButtonStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(ButtonStory, {
    storyName: locale.stories.components.buttons.button.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default ButtonStory;
