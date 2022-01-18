import React from 'react';
import Guide from './guides/ApplyingThemesGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
// import { argTypes, args } from './args/typographyArgs';

const { bankaiUI: locale } = strings;

const ApplyingThemesStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(ApplyingThemesStory, {
    storyName: locale.stories.styleGuide.theming.applyingThemes.title,
    // args,
    // argTypes,
    hasA11Y: false,
    hasActions: false,
    shouldShowPanel: false,
});

export default ApplyingThemesStory;
