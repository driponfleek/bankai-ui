import React from 'react';
import Guide from './guides/GuideColorDesignTokens';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const StoryColorDesignTokens = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryColorDesignTokens, {
    storyName: locale.stories.styleGuide.designTokens.colorTokens.title,
    hasA11Y: false,
    hasActions: false,
    shouldShowPanel: false,
});

export default StoryColorDesignTokens;
