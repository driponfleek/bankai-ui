import React from 'react';
import Guide from './guides/GuideAboutDesignTokens';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const StoryAboutDesignTokens = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryAboutDesignTokens, {
    storyName: locale.stories.styleGuide.designTokens.whatAreDesignTokens.title,
    hasA11Y: false,
    hasActions: false,
    shouldShowPanel: false,
});

export default StoryAboutDesignTokens;
