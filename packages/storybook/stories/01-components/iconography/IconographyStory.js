import React from 'react';
import Guide from './guides/IconographyGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const IconographyStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(IconographyStory, {
    storyName: locale.stories.components.iconography.icons.title,
    hasA11Y: false,
    hasInfo: false,
    shouldShowPanel: false,
});

export default IconographyStory;
