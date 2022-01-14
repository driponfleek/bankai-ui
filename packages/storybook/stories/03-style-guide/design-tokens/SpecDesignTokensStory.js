import React from 'react';
import Guide from './guides/SpecDesignTokensGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const SpecDesignTokensStory = (props) => <Guide {...props} />;

storyConfig(SpecDesignTokensStory, {
    storyName: locale.stories.styleGuide.designTokens.specTokens.title,
    hasA11Y: false,
    hasActions: false,
    shouldShowPanel: false,
});

export default SpecDesignTokensStory;
