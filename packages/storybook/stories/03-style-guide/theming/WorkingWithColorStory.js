import React from 'react';
import Guide from './guides/WorkingWithColorGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
// import { argTypes, args } from './args/typographyArgs';

const { bankaiUI: locale } = strings;

const WorkingWithColorStory = (props, context = {}) => {
    const { isDarkMode } = context;

    return <Guide {...props} isDarkMode={isDarkMode} />;
};

storyConfig(WorkingWithColorStory, {
    storyName: locale.stories.styleGuide.theming.workingWithColor.title,
    // args,
    // argTypes,
    hasA11Y: false,
    hasActions: false,
    shouldShowPanel: false,
});

export default WorkingWithColorStory;
