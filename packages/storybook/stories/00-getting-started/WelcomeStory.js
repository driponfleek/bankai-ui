import React from 'react';
import Guide from './guides/WelcomeGuide';
import { storyConfig } from '../../utils/storiesConfig';
import strings from '../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const WelcomeStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(WelcomeStory, {
    storyName: locale.stories.intro.welcome.title,
    hasA11Y: false,
    hasInfo: false,
    shouldShowPanel: false,
});

export default WelcomeStory;
