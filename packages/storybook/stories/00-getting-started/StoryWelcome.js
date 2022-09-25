import React from 'react';
import Guide from './guides/WelcomeGuide';
import { storyConfig } from '../../utils/storiesConfig';
import strings from '../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const StoryWelcome = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryWelcome, {
    storyName: locale.stories.intro.welcome.title,
    hasA11Y: false,
    hasInfo: false,
    shouldShowPanel: false,
});

export default StoryWelcome;
